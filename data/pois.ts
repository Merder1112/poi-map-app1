// data/pois.ts

export type PointOfInterest = {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
};

export const pois: PointOfInterest[] = [
  {
    id: "1",
    name: "บึงแก่นนคร",
    description: "สวนสาธารณะและบึงน้ำใจกลางเมืองขอนแก่น",
    latitude: 16.4235,
    longitude: 102.8360,
  },
  {
    id: "2",
    name: "มหาวิทยาลัยขอนแก่น",
    description: "มหาวิทยาลัยขนาดใหญ่ในภาคตะวันออกเฉียงเหนือ",
    latitude: 16.4728,
    longitude: 102.8231,
  },
  {
    id: "3",
    name: "พิพิธภัณฑสถานแห่งชาติขอนแก่น",
    description: "แหล่งเรียนรู้ประวัติศาสตร์และโบราณคดีอีสาน",
    latitude: 16.4310,
    longitude: 102.8350,
  },
  {
    id: "4",
    name: "วัดหนองแวง",
    description: "วัดสำคัญ มีพระธาตุเก้าชั้นเป็นจุดสังเกต",
    latitude: 16.4224,
    longitude: 102.8341,
  },
  {
    id: "5",
    name: "ตลาดต้นตาล",
    description: "ตลาดเก่าริมบึงแก่นนคร บรรยากาศย้อนยุค",
    latitude: 16.4198,
    longitude: 102.8378,
  },
  {
    id: "6",
    name: "สนามบินขอนแก่น",
    description: "ท่าอากาศยานนานาชาติขอนแก่น",
    latitude: 16.4666,
    longitude: 102.7838,
  },
  {
    id: "7",
    name: "เซ็นทรัลขอนแก่น",
    description: "ห้างสรรพสินค้าขนาดใหญ่ใจกลางเมือง",
    latitude: 16.4419,
    longitude: 102.8339,
  },
  {
    id: "8",
    name: "ศาลหลักเมืองขอนแก่น",
    description: "สถานที่ศักดิ์สิทธิ์คู่บ้านคู่เมือง",
    latitude: 16.4325,
    longitude: 102.8355,
  },
  {
    id: "9",
    name: "สวนรัชดานุสรณ์",
    description: "สวนสาธารณะเก่าแก่ของเมืองขอนแก่น",
    latitude: 16.4363,
    longitude: 102.8321,
  },
  {
    id: "10",
    name: "ศูนย์ประชุมและแสดงสินค้านานาชาติขอนแก่น (KICE)",
    description: "ศูนย์ประชุมและจัดแสดงสินค้าขนาดใหญ่",
    latitude: 16.4655,
    longitude: 102.8146,
  },
];