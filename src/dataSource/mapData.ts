import { EnemyName, TowerName } from "@/type"

/**
 * 地图数据 
 * 控制x y轴的方向 1:左 2:上 3:右 4:下
 */
const mapData: MapDataItem[] = [
  // 初始地图
  {
    start: [{x: 0, y: 5, x_y: 3, num: 73}], 
    map: [{2: 2, 4: 3, 6: 2, 8: 3, 18: 4, 20: 3, 22: 4, 24: 3, 26: 4, 28: 1, 30: 4, 32: 1, 34: 4, 36: 1, 46: 2, 48: 1, 51: 2, 53: 3, 58: 2, 61: 3, 67: 4, 70: 1}],
    // towerArr: [
    //   {tname: 'huonan', x: 4, y: 4},
    //   {tname: 'huonan', x: 4, y: 5},
    //   {tname: 'huonan', x: 5, y: 4},
    // ]
    enemyArr: [
      ['zombie-1','zombie-2','zombie-3','iron-gate','rugby','newspaper','zombie-dance' ,'pole-vault']
    ]
  },
  // X形
  {
    start: [
      {x: 7, y: 5, x_y: 1, num: 23},
      {x: 11, y: 5, x_y: 3, num: 23},
      {x: 7, y: 6, x_y: 1, num: 22},
      {x: 11, y: 6, x_y: 3, num: 22},
    ],
    map: [
      {1: 2, 2: 1, 3: 2, 4: 1, 5: 2, 6: 1, 7: 2, 8: 1, 9: 2, 10: 3, 13: 4, 14: 3, 15: 4, 16: 3, 17: 4, 18: 3, 19: 4, 20: 3, 22: 4},
      {1: 2, 2: 3, 3: 2, 4: 3, 5: 2, 6: 3, 7: 2, 8: 3, 9: 2, 10: 1, 13: 4, 14: 1, 15: 4, 16: 1, 17: 4, 18: 1, 19: 4, 20: 1, 22: 4},
      {1: 4, 2: 1, 3: 4, 4: 1, 5: 4, 6: 1, 7: 4, 8: 1, 9: 4, 10: 3, 13: 2, 14: 3, 15: 2, 16: 3, 17: 2, 18: 3, 19: 2, 20: 3, 22: 2},
      {1: 4, 2: 3, 3: 4, 4: 3, 5: 4, 6: 3, 7: 4, 8: 3, 9: 4, 10: 1, 13: 2, 14: 1, 15: 2, 16: 1, 17: 2, 18: 1, 19: 2, 20: 1, 22: 2},
    ],
    end: {x: 9, y: 6},
  },
  // 圣诞树
  {"start":[{"x":1,"y":5,"x_y":3,"num":34},{"x":1,"y":6,"x_y":3,"num":33}],"map":[{"2":2,"4":3,"5":4,"6":3,"7":4,"8":3,"10":2,"13":3,"14":4,"15":3,"16":4,"17":3,"18":4,"19":3,"21":2,"25":3,"26":4,"27":3,"28":4,"29":3,"30":4,"31":3,"32":4,"33":3},{"2":4,"4":3,"5":2,"6":3,"7":2,"8":3,"10":4,"13":3,"14":2,"15":3,"16":2,"17":3,"18":2,"19":3,"21":4,"25":3,"26":2,"27":3,"28":2,"29":3,"30":2,"31":3}],"end":{"x":18,"y":6}},
  // T
  {"start":[{"x":1,"y":5,"x_y":2,"num":48},{"x":9,"y":1,"x_y":3,"num":36},{"x":5,"y":10,"x_y":3,"num":37}],"map":[{"3":3,"5":4,"8":3,"23":4,"26":1,"41":4,"44":1,"46":2},{"8":4,"14":1,"29":4,"32":1,"34":2},{"12":2,"15":1,"30":4,"33":1,"35":2}],"end":{"x":1,"y":7}},
  // 心形
  {
    start: [{x: 8, y: 5, x_y: 2, num: 66}],
    map: [{2: 1, 4: 2, 5: 1, 7: 2, 8: 1, 12: 4, 16: 3, 17: 4, 19: 3, 21: 4, 23: 3, 25: 4, 26: 3, 28: 4, 29: 3, 30: 4, 31: 3, 34: 2, 35: 3, 36: 2, 37: 3, 39: 2, 40: 3, 42: 2, 44: 3, 46: 2, 48: 3, 49: 2, 53: 1, 57: 4, 58: 1, 60: 4, 61: 1, 63: 4}]
  }
]

export default mapData

/** 其他的地图数据 */
export const othMapData = {
  /** 无尽模式 */
  endless: [
    {
      start: [{x: 0, y: 5, x_y: 3, num: 74}],
      map: [{2: 2, 4: 3, 6: 2, 8: 3, 18: 4, 20: 3, 22: 4, 24: 3, 26: 4, 28: 1, 30: 4, 32: 1, 34: 4, 36: 1, 46: 2, 48: 1, 51: 2, 53: 3, 58: 2, 61: 3, 67: 4, 70: 1}],
    },
  ] as MapDataItem[],
}

/** 塔防展示组件的地图数据 */
export const towerCanvasMapData: MapDataItem = {
  start: [{x: 0, y: 5, x_y: 3, num: 20}],
  map: [{6: 2, 10: 1, 16: 4}],
}

export type MapDataItem = {
  /** 初始格子的格子位置信息和总格子数量 (刚开始的值是，xy方向上的第几格) */
  start: MapGridInfo[]
  map: MapDataInfo[]
  /** 终点的位置，不传默认就是地图路径一的最后一格 */
  end?: {x: number, y: number}
  /** 初始化建造的塔防 */
  towerArr?: BuildTowerParams[]
  /** 敌人数组 */
  enemyArr?: Array<EnemyName[]>
}

export type MapDataInfo = {[key in number]: DirectionType}

export type BuildTowerParams = {
  x: number
  y: number
  tname: TowerName
}

/** 格子类型 */
export type GridInfo = {
  x: number
  y: number
  /** 下一步往上下左右哪边 */
  x_y: DirectionType
}

export type MapGridInfo = GridInfo & {num: number}

/** 方向 1:左 2:上 3:右 4:下 */
export type DirectionType = 1 | 2 | 3 | 4
