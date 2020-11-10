var textureData=[
'milkyway','astronomersu',
'sol',
	'mercury',
	'venus',
	'earth','moon',
	'mars','phobos','deimos',
	'jupiter','io','europa','ganymede','callisto',
	'saturn','mimas','enceladus','tethys','dione','rhea','titan',
	'uranus','ariel','umbriel','titania','oberon','miranda',
	'neptune','triton','nereid','naiad','larissa','proteus',
	'pluto','charon','nix','hydra'
];
var ringTextureData=['saturn','uranus','neptune'];
var cloudTextureData=['venus','earth','titan'];
var alphaTextureData=['asteroidbelt','constellation'];

const NODATA = 0;
//SceneGraph資料結構化
var selectSolarSystemData={
	ref:{
		name:"參考點",
		dest:"*參考點",
		child:[],
		type:"coordinateSystem",
		size:8,
	},
	milkyway:{
		name:"銀河系",
		dest:"*銀河系",
		child:['sun'],
		type:"galaxy",
		size:1,
	},
	sun:{
		name:"太陽",
		dest:"太陽",
		child:['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune','plutosys'],
		type:"star",
		Eccentricity:NODATA,//軌道離心率
		Inclination:NODATA,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:NODATA,//半長軸
		LongOfPericenter:NODATA,
		MeanLongitude:NODATA,
		ApsidalPrecession:NODATA,//軌道進動
		Position:NODATA,//公轉位置,
		AxialTilt:7.005+7.25,//黃道+太陽傾角
		Sidereal:'day/25.05',
		sizeVec:'[planet_ps*0.08*109, planet_ps*0.08*109, planet_ps*0.08*109]',
		size:'planet_ps*0.08*109',
		sp_texture:'sol',
	},
	mercury:{
		name:"水星",
		dest:"水星",
		child:[],
		type:"planet",
		Eccentricity:0.2408,//軌道離心率
		Inclination:7.005,//軌道傾角 
		LongitudeAscendingNode:48.331,
		semiMajorAxis:'AU*0.3871',//半長軸
		LongOfPericenter:77.456,
		MeanLongitude:252.251,
		ApsidalPrecession:'year/1407.509405',//軌道進動
		Position:'day/87.9691',//公轉位置,
		AxialTilt:2.11/60,//2.11′ ± 0.1′
		Sidereal:'day/58.646',
		sizeVec:'[planet_ps*0.387370494907902, planet_ps*0.387370494907902, planet_ps*0.387370494907902]',
		size:'planet_ps*0.387370494907902',
	},
	venus:{
		name:"金星",
		dest:"金星",
		child:[],
		type:"planet",
		Eccentricity:0.0068,//軌道離心率
		Inclination:7.005,//軌道傾角
		LongitudeAscendingNode:76.678,//升交點黃經 
		semiMajorAxis:'AU*0.7233',//半長軸 
		LongOfPericenter:131.533,//
		MeanLongitude:181.979,//
		ApsidalPrecession:'year/1407.509405*8.62/43.03',//軌道進動
		Position:'day/224.701',//公轉位置,
		AxialTilt:177.36,
		Sidereal:'day/243.0185',
		sizeVec:'[planet_ps*0.9499, planet_ps*0.9499, planet_ps*0.9499]',
		size:'planet_ps*0.9499',
	},
	earth:{
		name:"地球",
		dest:"地球",
		child:['moon'],
		type:"planet",
		Eccentricity:0.0167,//軌道離心率
		Inclination:7.005,//軌道傾角
		LongitudeAscendingNode:-11.26064,//升交點黃經
		semiMajorAxis:'AU*1.000001018',//半長軸
		LongOfPericenter:102.947,//
		MeanLongitude:100.464,//
		ApsidalPrecession:'year/1407.509405*3.8/43.03',//軌道進動
		Position:'day/365.256363004',//公轉位置
		RefAxis:{x:-36.2,y:0,z:-31},
		AxialTilt:23.4392811,
		Sidereal:'day/0.99726968',
		sizeVec:'[planet_ps*6378.1/6371, planet_ps*6356.8/6371, planet_ps*6378.1/6371]',
		size:'planet_ps',
	},
	moon:{
		name:"月球 (地衛一)",
		dest:"└ 月球 (地衛一)",
		child:[],
		type:"moon",
		Eccentricity:0.0549,//軌道離心率
		Inclination:5.145,//軌道傾角 
		LongitudeAscendingNode:NODATA,//升交點黃經
		semiMajorAxis:'moonAU*0.00257',//半長軸
		LongOfPericenter:NODATA,//
		MeanLongitude:NODATA,//
		ApsidalPrecession:'year/8.85',//軌道進動
		Position:'day/27.321661',//公轉位置
		AxialTilt:NODATA,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*1737.10/6371, moon_ps*1735.97/6371, moon_ps*1737.10/6371]',
		size:moon_ps*1737.10 /6371,
	},
	mars:{
		name:"火星",
		dest:"火星",
		child:['phobos','deimos'],
		type:"planet",
		Eccentricity:0.09341233,//軌道離心率
		Inclination:7.005+1.850,//軌道傾角
		LongitudeAscendingNode:-49.558,//升交點黃經 
		semiMajorAxis:'AU*1.52366231' ,//半長軸
		LongOfPericenter:336.041,//
		MeanLongitude:355.453,//
		ApsidalPrecession:'year/1407.509405*1.4/43.03',//軌道進動
		Position:'day/686.971',//公轉位置
		AxialTilt:25.19,
		Sidereal:'day/1.025957',
		sizeVec:'[planet_ps*3396.2/6371, planet_ps*3376.2/6371, planet_ps*3396.2/6371]',
		size:'planet_ps*3389.5/6371',
	},
	phobos:{
		name:"火衛一",
		dest:"└ 火衛一",
		child:[],
		type:"moon",
		Eccentricity:0.0151,//軌道離心率
		Inclination:26.04,//軌道傾角 
		LongitudeAscendingNode:16.946,
		semiMajorAxis:'moonKM*9234.42',//半長軸 
		LongOfPericenter:157.116,//
		MeanLongitude:271.138,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/0.31891023',//公轉位置
		AxialTilt:37.1,
		Sidereal:'synchronous',
		sizeVec:'[sizeKM*27, sizeKM*22, sizeKM*18]',
		size:'sizeKM*11.1',
	},
	deimos:{
		name:"火衛二",
		dest:"└ 火衛二",
		child:[],
		type:"moon",
		Eccentricity:0.00033,//軌道離心率
		Inclination:27.58,//軌道傾角 
		LongitudeAscendingNode:318.370,
		semiMajorAxis:'moonKM*23463.2',//半長軸 
		LongOfPericenter:358.233,//
		MeanLongitude:158.554,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1.263',//公轉位置
		AxialTilt:36.48,
		Sidereal:'synchronous',
		sizeVec:'[sizeKM*15, sizeKM*12.2, sizeKM*11]',
		size:'sizeKM*6.2',
	},
	jupiter:{
		name:"木星",
		dest:"木星",
		child:['io','europa','ganymede','callisto'],
		type:"planet",
		Eccentricity:0.0489,//軌道離心率
		Inclination:7.005+1.303,//軌道傾角 
		LongitudeAscendingNode:100.464,//升交點黃經 
		semiMajorAxis:'AU*5.2044' ,//半長軸 
		LongOfPericenter:14.7539,//
		MeanLongitude:34.404,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'year/11.862',//公轉位置
		AxialTilt:3.13,
		Sidereal:'hour/9.925',
		sizeVec:'[planet_ps*11.209, planet_ps*10.517, planet_ps*11.209]',
		size:'planet_ps*69911/6371',
	},
	io:{
		name:"Io (木衛一)",
		dest:"└ Io (木衛一)",
		child:[],
		type:"moon",
		Eccentricity:0.0041,//軌道離心率
		Inclination:2.213,//軌道傾角 
		LongitudeAscendingNode:312.981,
		semiMajorAxis:'outerAU*0.002819',//半長軸 
		LongOfPericenter:97.735,//
		MeanLongitude:106.724,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1.769137786',//公轉位置
		AxialTilt:25.50,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*1830.0/6371, moon_ps*1818.7/6371, moon_ps*1815.3/6371]',
		size:'moon_ps*1821.3/6371',
	},
	europa:{
		name:"Europa (木衛二)",
		dest:"└ Europa (木衛二)",
		child:[],
		type:"moon",
		Eccentricity:0.009,//軌道離心率
		Inclination:1.791,//軌道傾角 
		LongitudeAscendingNode:101.087,
		semiMajorAxis:'outerAU*0.00448558523' ,//半長軸 
		LongOfPericenter:155.512,//
		MeanLongitude:176.377,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/3.551181',//公轉位置
		AxialTilt:25.49,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.245, moon_ps*0.245, moon_ps*0.245]',
		size:'moon_ps*0.245',
	},
	ganymede:{
		name:"Ganymede (木衛三)",
		dest:"└ Ganymede (木衛三)",
		child:[],
		type:"moon",
		Eccentricity:0.0013,//軌道離心率
		Inclination:2.214,//軌道傾角 
		LongitudeAscendingNode:119.841,
		semiMajorAxis:'outerAU*0.00715518205' ,//半長軸 
		LongOfPericenter:188.831,//
		MeanLongitude:121.206,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/7.15455296',//公轉位置
		AxialTilt:25.43,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.413, moon_ps*0.413, moon_ps*0.413]',
		size:'moon_ps*0.413',
	},
	callisto:{
		name:"Callisto (木衛四)",
		dest:"└ Callisto (木衛四)",
		child:[],
		type:"moon",
		Eccentricity:0.0074,//軌道離心率
		Inclination:2.017,//軌道傾角 
		LongitudeAscendingNode:323.265,
		semiMajorAxis:'outerAU*0.01258507217' ,//半長軸 
		LongOfPericenter:335.933,//
		MeanLongitude:85.091,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/16.6890184',//公轉位置
		AxialTilt:25.17,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.378, moon_ps*0.378, moon_ps*0.378]',
		size:'moon_ps*0.378',
	},
	saturn:{
		name:"土星",
		dest:"土星",
		child:['mimas','enceladus','tethys','dione','rhea','titan'],
		type:"planet",
		Eccentricity:0.0565,//軌道離心率
		Inclination:7.005+2.485,//軌道傾角 
		LongitudeAscendingNode:113.665,//升交點黃經 
		semiMajorAxis:'AU*9.5826' ,//半長軸 
		LongOfPericenter:92.432,//
		MeanLongitude:49.944,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'year/29.4571',//公轉位置
		AxialTilt:26.73,
		Sidereal:'hour/10.5605555556',
		sizeVec:'[planet_ps*9.449, planet_ps*8.552, planet_ps*9.449]',
		size:'planet_ps*58232/6371',
	},
	mimas:{
		name:"土衛一",
		dest:"└ 土衛一",
		child:[],
		type:"moon",
		Eccentricity:0.0196,//軌道離心率
		Inclination:26.73+1.574,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00124025161' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:23,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/0.942',//公轉位置
		AxialTilt:0.00,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*415.6/6371, moon_ps*0.5*393.4/6371, moon_ps*0.5*381.2/6371]',
		size:'moon_ps*0.0311',
	},
	enceladus:{
		name:"土衛二",
		dest:"└ 土衛二",
		child:[],
		type:"moon",
		Eccentricity:0.0047,//軌道離心率
		Inclination:26.73+0.009,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00159058413' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:215,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1.370218',//公轉位置
		AxialTilt:0.00,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*513.2/6371, moon_ps*0.5*502.8/6371, moon_ps*0.5*496.6/6371]',
		size:'moon_ps*0.0395',
	},
	tethys:{
		name:"土衛三",
		dest:"└ 土衛三",
		child:[],
		type:"moon",
		Eccentricity:0.0001,//軌道離心率
		Inclination:26.73+1.12,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00196940637' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:98,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1.887802',//公轉位置
		AxialTilt:0.00,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*1076.8/6371, moon_ps*0.5*1057.4/6371, moon_ps*0.5*1052.6/6371]',
		size:'moon_ps*0.083',
	},
	dione:{
		name:"土衛四",
		dest:"└ 土衛四",
		child:[],
		type:"moon",
		Eccentricity:0.0022,//軌道離心率
		Inclination:26.73+0.019,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00252273644' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:310,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/2.736915',//公轉位置
		AxialTilt:0.00,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*1128.8/6371, moon_ps*0.5*1122.6/6371, moon_ps*0.5*1119.2/6371]',
		size:'moon_ps*0.5*1122.8/6371',
	},
	rhea:{ 
		name:"土衛五",
		dest:"└ 土衛五",
		child:['rhea_trojan'],
		type:"moon",
		Eccentricity:0.0012583,//軌道離心率
		Inclination:26.73+0.345,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00352349934' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:190,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/4.518212',//公轉位置
		AxialTilt:6.45,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*1532.4/6371, moon_ps*0.5*1525.6/6371, moon_ps*0.5*1524.4/6371]',
		size:'moon_ps*0.5*763.8/6371',
	},
	rhea_trojan:{ 
		name:"土衛五-星環牧羊犬",
		child:[],
		type:"submoon",
		Eccentricity:NODATA,//軌道離心率
		Inclination:6.45,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00004' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1',//公轉位置
		AxialTilt:NODATA,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*50/6371, moon_ps*50/6371, moon_ps*50/6371]',
		size:'moon_ps*50/6371',
		sp_texture:'moon',
	},
	titan:{
		name:"泰坦星 (土衛六)",
		dest:"└ 泰坦星 (土衛六)",
		child:[],
		type:"moon",
		Eccentricity:0.0288,//軌道離心率
		Inclination:26.73+0.34854,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00416769646' ,//半長軸 
		LongOfPericenter:NODATA,//
		MeanLongitude:120,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/15.945',//公轉位置
		AxialTilt:6.06,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.404, moon_ps*0.404, moon_ps*0.404]',
		size:'moon_ps*0.404',
	},
	uranus:{
		name:"天王星",
		dest:"天王星",
		child:['ariel','umbriel','titania','oberon','miranda'],
		type:"planet",
		Eccentricity:0.046381,//軌道離心率
		Inclination:7.005+0.773,//軌道傾角 
		LongitudeAscendingNode:74.006,//升交點黃經 
		semiMajorAxis:'AU*19.2184' ,//半長軸 
		LongOfPericenter:170.964,//
		MeanLongitude:313.232,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'year/84.0205',//公轉位置
		AxialTilt:97.77,
		Sidereal:'day/0.71833',
		sizeVec:'[planet_ps*4.007, planet_ps*3.929, planet_ps*4.007]',
		size:'planet_ps*25362/6371',
	},
	ariel:{
		name:"天衛一",
		dest:"└ 天衛一",
		child:[],
		type:"moon",
		Eccentricity:0.0012,//軌道離心率
		Inclination:97.77+0.260,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00127688983' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:56,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/2.520',//公轉位置
		AxialTilt:74.90,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*1162.2/6371, moon_ps*0.5*1155.8/6371, moon_ps*0.5*1155.4/6371]',
		size:'moon_ps*0.0908',
	},
	umbriel:{
		name:"天衛二",
		dest:"└ 天衛二",
		child:[],
		type:"moon",
		Eccentricity:0.0039,//軌道離心率
		Inclination:97.77+0.128,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00177810017' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:280,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/4.144',//公轉位置
		AxialTilt:0,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.092, moon_ps*0.092, moon_ps*0.092]',
		size:'moon_ps*0.092',
	},
	titania:{
		name:"天衛三",
		dest:"└ 天衛三",
		child:[],
		type:"moon",
		Eccentricity:0.0011,//軌道離心率
		Inclination:97.77+0.340,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00291387837' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:30,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/8.706234',//公轉位置
		AxialTilt:74.90,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.1235, moon_ps*0.1235, moon_ps*0.1235]',
		size:'moon_ps*0.1235',
	},
	oberon:{
		name:"天衛四",
		dest:"└ 天衛四",
		child:[],
		type:"moon",
		Eccentricity:0.0014,//軌道離心率
		Inclination:97.77+0.058,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00390059027' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:150,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/13.463234',//公轉位置
		AxialTilt:74.90,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.1194, moon_ps*0.1194, moon_ps*0.1194]',
		size:'moon_ps*0.1194',
	},
	miranda:{
		name:"天衛五",
		dest:"└ 天衛五",
		child:[],
		type:"moon",
		Eccentricity:0.0013,//軌道離心率
		Inclination:97.77+4.232,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'3.4*outerAU*0.00086491872' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:120,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1.413479',//公轉位置
		AxialTilt:NODATA,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*480/6371, moon_ps*0.5*468.4/6371, moon_ps*0.5*465.8/6371]',
		size:'moon_ps*0.03697',
	},
	neptune:{
		name:"海王星",
		dest:"海王星",
		child:['triton','nereid','naiad','larissa','proteus','halimede'],
		type:"planet",
		Eccentricity:0.008678,//軌道離心率
		Inclination:7.005+1.767975,//軌道傾角 
		LongitudeAscendingNode:131.784,//升交點黃經 
		semiMajorAxis:'AU*30.07' ,//半長軸 
		LongOfPericenter:44.971,//
		MeanLongitude:304.880,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'year/164.8',//公轉位置
		AxialTilt:28.32,
		Sidereal:'day/0.6713',
		sizeVec:'[planet_ps*3.883, planet_ps*3.829, planet_ps*3.883]',
		size:'planet_ps*24622/6371',
	},
	triton:{
		name:"海衛一",
		dest:"└ Triton (海衛一)",
		child:[],
		type:"moon",
		Eccentricity:0.000016,//軌道離心率
		Inclination:28.32+156.885,//軌道傾角 
		LongitudeAscendingNode:147.899288,
		semiMajorAxis:'4.6*outerAU*0.00237141744' ,//半長軸 
		LongOfPericenter:293.092400,
		MeanLongitude:315.726316,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/5.876854',//公轉位置
		AxialTilt:110.44,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.2122 , moon_ps*0.2122 , moon_ps*0.2122]',
		size:'moon_ps*0.2122',
	},
	nereid:{
		name:"海衛二",
		dest:"└ Nereid (海衛二)",
		child:[],
		type:"moon",
		Eccentricity:0.7417482,//軌道離心率
		Inclination:28.32+7.090,//軌道傾角 
		LongitudeAscendingNode:319.42404,
		semiMajorAxis:'outerAU*0.0368584' ,//半長軸 
		LongOfPericenter:17.690,
		MeanLongitude:36.056,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/360.11',//公轉位置
		AxialTilt:110.44,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.08 , moon_ps*0.08 , moon_ps*0.08]',
		size:'moon_ps*0.08',
	},
	naiad:{
		name:"海衛三",
		dest:"└ Naiad (海衛三)",
		child:[],
		type:"moon",
		Eccentricity:0.0047,//軌道離心率
		Inclination:28.32+4.75,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'4.6*outerAU*0.00032236027' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/0.2943958',//公轉位置
		AxialTilt:NODATA,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.0096 , moon_ps*0.0060 , moon_ps*0.0052]',
		size:'moon_ps*0.0060',
	},
	larissa:{
		name:"海衛七",
		dest:"└ Larissa (海衛七)",
		child:[],
		type:"moon",
		Eccentricity:0.001393,//軌道離心率
		Inclination:28.32+0.251,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'4.6*outerAU*0.00049163975' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/0.55465332',//公轉位置
		AxialTilt:NODATA,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.5*216/6371, moon_ps*0.5*204/6371, moon_ps*0.5*168/6371]',
		size:'moon_ps*2*97/6371',
	},
	proteus:{
		name:"海衛八",
		dest:"└ Proteus (海衛八)",
		child:[],
		type:"moon",
		Eccentricity:0.00053,//軌道離心率
		Inclination:28.32+0.524,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'4.6*outerAU*0.00078600049' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1.12231477',//公轉位置
		AxialTilt:NODATA,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*424/6371, moon_ps*390/6371, moon_ps*396/6371]',
		size:'moon_ps*2*210/6371',
	},
	halimede:{
		name:"海衛九",
		dest:"└ Halimede (海衛九)",
		child:[],
		type:"moon",
		Eccentricity:0.2646,//軌道離心率
		Inclination:134.1,//軌道傾角 
		LongitudeAscendingNode:NODATA,
		semiMajorAxis:'0.45*outerAU*0.11103767668' ,//半長軸 
		LongOfPericenter:NODATA,
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/1879.08',//公轉位置
		AxialTilt:NODATA,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*62/6371, moon_ps*62/6371, moon_ps*62/6371]',
		size:'moon_ps*2*62/6371',
		sp_texture:'moon',
	},
	plutosys:{
		name:"冥王星星系質心",
		dest:"冥王星星系質心",
		child:['pluto','charon','nix','hydra','kerberos','styx'],
		type:"coordinateSystem",
		Eccentricity:0.2488,//軌道離心率
		Inclination:17.16,//軌道傾角 
		LongitudeAscendingNode:110.299,//升交點黃經 
		semiMajorAxis:'AU*39.482' ,//半長軸 
		LongOfPericenter:113.8077856,//
		MeanLongitude:229.6116889,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'year/247.94',//公轉位置
		AxialTilt:NODATA,
		Sidereal:NODATA,
		sizeVec:NODATA,
		size:NODATA,
	},
	pluto:{
		name:"冥王星",
		dest:"└ 冥王星",
		child:[],
		type:"dwarfPlanet",
		Eccentricity:0.003484,//軌道離心率
		Inclination:96.1680,//軌道傾角 
		LongitudeAscendingNode:223.0539-180,//升交點黃經 
		semiMajorAxis:'10*outerAU*'+(0.00011484789*2043.1/17527.4),//半長軸 
		LongOfPericenter:337.92,//
		MeanLongitude:77.960,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/6.3872304',//公轉位置
		AxialTilt:122.53,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.1868 , moon_ps*0.1868 , moon_ps*0.1868]',
		size:'moon_ps*0.1868',
	},
	charon:{
		name:"冥衛一",
		dest:"└ Charon (冥衛一)",
		child:[],
		type:"moon",
		Eccentricity:0.0002,//軌道離心率
		Inclination:112.783,//軌道傾角 
		LongitudeAscendingNode:223.046,//升交點黃經 
		semiMajorAxis:'10*outerAU*0.00011484789',//半長軸 
		LongOfPericenter:157.92,//
		MeanLongitude:257.960,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/6.3872304',//公轉位置
		AxialTilt:115.9,
		Sidereal:'synchronous',
		sizeVec:'[moon_ps*0.095 , moon_ps*0.095 , moon_ps*0.095]',
		size:'moon_ps*0.095',
	},
	nix:{
		name:"冥衛二",
		dest:"└ Nix (冥衛二)",
		child:[],
		type:"moon",
		Eccentricity:0.002036,//軌道離心率
		Inclination:122.53,//軌道傾角 
		LongitudeAscendingNode:115.9,//升交點黃經 
		semiMajorAxis:'10*outerAU*0.00032549928',//半長軸 
		LongOfPericenter:NODATA,//
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/24.85463',//公轉位置
		AxialTilt:132,
		Sidereal:'day/1.829',
		sizeVec:'[moon_ps*49.8/6371, moon_ps*33.2/6371, moon_ps*31.1/6371]',
		size:'moon_ps*40/6371',
		//sp_texture:'moon',
	},
	hydra:{
		name:"冥衛三",
		dest:"└ Hydra (冥衛三)",
		child:[],
		type:"moon",
		Eccentricity:0.005862,//軌道離心率
		Inclination:112.783+0.242,//軌道傾角 
		LongitudeAscendingNode:145,//升交點黃經 
		semiMajorAxis:'10*outerAU*0.0004327468',//半長軸 
		LongOfPericenter:NODATA,//
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/38.20177',//公轉位置
		AxialTilt:110,
		Sidereal:'day/0.4295',
		sizeVec:'[moon_ps*50.9/6371, moon_ps*36.1/6371, moon_ps*30.9/6371]',
		size:'moon_ps*40/6371',
		//sp_texture:'moon',
	},
	kerberos:{
		name:"冥衛四",
		dest:"└ Kerberos (冥衛四)",
		child:[],
		type:"moon",
		Eccentricity:0.00328,//軌道離心率
		Inclination:112.783+0.389,//軌道傾角 
		LongitudeAscendingNode:145,//升交點黃經 
		semiMajorAxis:'10*outerAU*0.00038625549',//半長軸 
		LongOfPericenter:NODATA,//
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/32.16756',//公轉位置
		AxialTilt:96,
		Sidereal:'day/5.31',
		sizeVec:'[moon_ps*19/6371, moon_ps*10/6371, moon_ps*9/6371]',
		size:'moon_ps*12/6371',
		sp_texture:'moon',
	},
	styx:{
		name:"冥衛五",
		dest:"└ Styx (冥衛五)",
		child:[],
		type:"moon",
		Eccentricity:0.005787,//軌道離心率
		Inclination:112.783+0.809,//軌道傾角 
		LongitudeAscendingNode:145,//升交點黃經 
		semiMajorAxis:'10*outerAU*0.00028513774 ',//半長軸 
		LongOfPericenter:NODATA,//
		MeanLongitude:NODATA,//
		ApsidalPrecession:NODATA,//軌道進動
		Position:'day/20.16155',//公轉位置
		AxialTilt:82,
		Sidereal:'day/3.24',
		sizeVec:'[moon_ps*16/6371, moon_ps*10/6371, moon_ps*8/6371]',
		size:'moon_ps*10/6371',
		sp_texture:'moon',
	}
};