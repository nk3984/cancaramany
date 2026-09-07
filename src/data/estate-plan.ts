/** Approved Can Caramany estate masterplan geometry (production v3).
 *  ViewBox matches can-caramany-plan-clean.png / interactive SVG.
 *  Do not retrace or alter these path outlines.
 */
export const ESTATE_VIEWBOX = { width: 1878, height: 1662 } as const;

export const ESTATE_PLAN_IMAGE =
  "/images/can-caramany/estate/can-caramany-plan-clean.png?v=2";

export type EstateParcelId =
  | "property-1"
  | "property-2"
  | "property-3"
  | "property-4"
  | "property-5";

export type EstateParcel = {
  id: EstateParcelId;
  roman: "I" | "II" | "III" | "IV" | "V";
  /** Index into `properties` for selectable parcels; null for Property V. */
  propertyIndex: number | null;
  selectable: boolean;
  path: string;
  href?: string;
};

/** Exact approved vector outlines from can-caramany-estate-interactive-*.svg */
export const estateParcels: EstateParcel[] = [
  {
    id: "property-1",
    roman: "I",
    propertyIndex: 0,
    selectable: true,
    href: "/properties/property-i",
    path: "M 584,683 L 650,691 L 730,703 L 845,716 L 845,716 L 845,740 L 838,766 L 815,795 L 785,835 L 755,875 L 725,915 L 695,955 L 665,995 L 635,1035 L 605,1075 L 575,1118 L 545,1160 L 515,1200 L 485,1240 L 455,1280 L 430,1315 L 410,1340 L 410,1340 L 365,1338 L 330,1338 L 300,1325 L 270,1310 L 235,1310 L 205,1295 L 180,1270 L 145,1223 L 185,1170 L 225,1120 L 265,1068 L 305,1015 L 345,963 L 385,910 L 425,858 L 465,805 L 505,752 L 545,700 L 584,683 Z",
  },
  {
    id: "property-2",
    roman: "II",
    propertyIndex: 1,
    selectable: true,
    href: "/properties/property-ii",
    path: "M 845,716 L 885,720 L 924,726 L 925,790 L 926,880 L 927,970 L 928,1060 L 929,1150 L 930,1238 L 927,1254 L 910,1272 L 910,1313 L 887,1321 L 833,1327 L 816,1342 L 806,1365 L 805,1400 L 795,1430 L 780,1452 L 748,1467 L 710,1475 L 675,1492 L 658,1495 L 640,1485 L 620,1467 L 600,1450 L 575,1430 L 550,1412 L 525,1393 L 500,1375 L 475,1358 L 450,1348 L 410,1340 L 430,1315 L 455,1280 L 485,1240 L 515,1200 L 545,1160 L 575,1118 L 605,1075 L 635,1035 L 665,995 L 695,955 L 725,915 L 755,875 L 785,835 L 815,795 L 838,766 L 845,740 L 845,716 Z",
  },
  {
    id: "property-3",
    roman: "III",
    propertyIndex: 2,
    selectable: true,
    href: "/properties/property-iii",
    path: "M 924,726 L 980,742 L 1035,758 L 1090,774 L 1137,789 L 1165,835 L 1190,880 L 1215,925 L 1238,968 L 1252,986 L 1242,1018 L 1240,1060 L 1240,1110 L 1240,1160 L 1243,1200 L 1248,1232 L 1258,1260 L 1270,1285 L 1285,1308 L 1296,1335 L 1298,1365 L 1305,1395 L 1318,1420 L 1330,1440 L 1344,1458 L 1356,1475 L 1325,1470 L 1295,1468 L 1270,1472 L 1245,1485 L 1220,1498 L 1195,1512 L 1165,1524 L 1125,1532 L 1080,1538 L 1030,1544 L 980,1550 L 925,1556 L 912,1518 L 900,1485 L 891,1450 L 868,1463 L 847,1468 L 838,1430 L 828,1390 L 823,1360 L 833,1327 L 887,1321 L 910,1313 L 910,1272 L 927,1254 L 930,1238 L 929,1150 L 928,1060 L 927,970 L 926,880 L 925,790 L 924,726 Z",
  },
  {
    id: "property-4",
    roman: "IV",
    propertyIndex: 3,
    selectable: true,
    href: "/properties/property-iv",
    path: "M 1252,986 L 1290,974 L 1335,960 L 1380,945 L 1425,930 L 1470,915 L 1510,904 L 1550,990 L 1590,1080 L 1630,1170 L 1670,1260 L 1710,1350 L 1750,1435 L 1817,1495 L 1740,1494 L 1660,1493 L 1580,1492 L 1510,1490 L 1450,1488 L 1400,1482 L 1356,1475 L 1344,1458 L 1330,1440 L 1318,1420 L 1305,1395 L 1298,1365 L 1296,1335 L 1285,1308 L 1270,1285 L 1258,1260 L 1248,1232 L 1243,1200 L 1240,1160 L 1240,1110 L 1240,1060 L 1242,1018 L 1252,986 Z",
  },
  {
    id: "property-5",
    roman: "V",
    propertyIndex: null,
    selectable: false,
    path: "M 584,683 L 620,635 L 660,580 L 700,525 L 740,470 L 780,415 L 820,360 L 860,305 L 900,250 L 940,195 L 980,140 L 1020,85 L 1060,35 L 1114,3 L 1160,100 L 1200,210 L 1245,320 L 1290,430 L 1340,540 L 1390,650 L 1440,760 L 1490,865 L 1510,904 L 1470,915 L 1425,930 L 1380,945 L 1335,960 L 1290,974 L 1252,986 L 1238,968 L 1215,925 L 1190,880 L 1165,835 L 1137,789 L 1090,774 L 1035,758 L 980,742 L 924,726 L 885,720 L 845,716 L 730,703 L 650,691 L 584,683 Z",
  },
];

export const selectableParcels = estateParcels.filter(
  (parcel) => parcel.selectable && parcel.propertyIndex !== null,
);

/** Default selection: Property III */
export const DEFAULT_ESTATE_PROPERTY_INDEX = 2;
