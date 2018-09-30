// HSI = (Ersw/Emax) ·100 & HSI = (Ersw/632.27) ·100 
// Ersw = M + 22 · (trm - tsk) + 2 · v 0.5 · (ta - tsk)
// Emax = 10 · v 0.4 · (psk - pa) 

//where: 
//[22 · (trm - tsk)] = radiation loads, in Btu/h; 
// trm = mean radiant temperature, in ºF; 
// tsk = superficial skin temperature, in ºF; 
// [2 · v^0,5 · (ta - tsk)] = convection loads, in Btu/h; 
// ta = air temperature, in ºF;
// v = air speed, in ft/min; 
// Ersw = required evaporative sweat, in Btu/h; 
// Emax = maximum evaporative capacity, in Btu/h; 
// psk = skin vapor pressure, in mmHg; 
// pa = air vapor pressure, in mmHg 
//  Radiation loss (R)
//  Convection loss (C)

// Ersw = M + 22 * (mean radiant temperature, in ºF - superficial skin temperature, in ºF) + 2 v^0.5 ( air temperature, in ºF - superficial skin temperature, in ºF)
