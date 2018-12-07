// https://journals.ametsoc.org/doi/pdf/10.1175/1520-0450%281979%29018%3C0861%3ATAOSPI%3E2.0.CO%3B2
const Ta = 16; // for a test
const Pa = 1.6;

const Q = 180;
const Tb = 37;
const Rs = 0.0387;
const Pb = 5.65;
const Zs = 0.0521;

//const hc = 12.3; // the whole body id unclothed cannot be used if Rf is not 0
const hc = 11.6;
//const hr = 0.776 * 5.67 * Math.pow(10, -8);
//const hr = 4.10 + 0.028*Ta; // the whole body is unclothed cannot be used if Rf is not 0
const hr = 3.35 + 0.049 * Ta;
const Ra = 1 / (hc + hr);
const Za = 0.0606 / hc;
//const Zs = 6.0 * Math.pow(10, 5) * Math.pow(Rs, 5);

const Qu = (Tb - Ta) / (Rs + Ra) + ((Pb - Pa) / (Zs + Za)) * (Ra / (Rs + Ra));
const Qv = Q - Qu; // if the whole body id unclothed
const f2 = 0.84; // the body is clothed 0.84
//const df = 7.64;
//const rf = df/60;
//const Zf = 0.124; // or 0.021
const Zf = 0.124;
const r = 1.98;
// 0.0167
// const r = 0.8;



//// fast formulas 

const Q2 = (Q - Qv);
const Z2 = (Zs + Za);
const T2 = (Tb - Ta);
const P2 = (Pb - Pa);
const R2 = (Rs + Ra);
const F2 = (1 - f2);

console.log('Q2', Q2);
console.log('Z2', Z2);
console.log('T2', T2);
console.log('P2', P2);
console.log('R2', R2);
console.log('F2', F2);


const a = r * Q2 - r * F2 * (T2 + Ra * P2 / Z2) * Math.pow(R2, -1);

console.log('a', a);

const b = (Q2 * Z2 + Q2 * r * R2 - r * T2 - f2 * P2 - F2 * (Z2 * T2 + Ra * P2) * Math.pow(R2, -1) + Ra * P2 * Math.pow(Z2, -1)) / 2;
console.log('b', b);

const c = Q2 * R2 * Z2 - Z2 * T2 - Ra * P2;
console.log('c', c, Q2 * R2 * Z2, Z2 * T2, Ra * P2, Q2 * R2 * Z2 - Z2 * T2);
const Rf = (-b + Math.pow((Math.pow(b, 2) - 4 * a * c), 1 / 2)) / 2 * a;

console.log('Rf', Rf);

const df = 60 * Rf;
console.log('df', df);


