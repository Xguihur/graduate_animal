const title = '动物关系图'

const data = [
  {
    name: '半索动物门',
    value: 7,
    children: [
      {
        name: '肠鳃纲',
        value: 7,
        children: [
          {
            name: '柱头虫目',
            value: 7,
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '刺胞动物门',
    value: 19,
    children: [
      {
        name: '珊瑚纲',
        value: 4,
        children: [
          {
            name: '软珊瑚目',
            value: 4,
            children: []
          }
        ]
      },
      {
        name: '水螅纲',
        value: 15,
        children: [
          {
            name: '花裸螅目',
            value: 15,
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '脊索动物门',
    value: 858,
    children: [
      {
        name: '哺乳纲',
        value: 185,
        children: [
          {
            name: '灵长目',
            value: 29,
            children: []
          },
          {
            name: '鳞甲目',
            value: 3,
            children: []
          },
          {
            name: '食肉目',
            value: 46,
            children: []
          },
          {
            name: '长鼻目',
            value: 1,
            children: []
          },
          {
            name: '奇蹄目',
            value: 3,
            children: []
          },
          {
            name: '偶蹄目',
            value: 54,
            children: []
          },
          {
            name: '啮齿目',
            value: 2,
            children: []
          },
          {
            name: '兔形目',
            value: 6,
            children: []
          },
          {
            name: '海牛目',
            value: 1,
            children: []
          },
          {
            name: '鲸目',
            value: 40,
            children: []
          }
        ]
      },
      {
        name: '鸟纲',
        value: 394,
        children: [
          {
            name: '鸡形目',
            value: 51,
            children: []
          },
          {
            name: '雁形目',
            value: 17,
            children: []
          },
          {
            name: '䴙䴘目',
            value: 3,
            children: []
          },
          {
            name: '鸽形目',
            value: 17,
            children: []
          },
          {
            name: '沙鸡目',
            value: 1,
            children: []
          },
          {
            name: '夜鹰目',
            value: 4,
            children: []
          },
          {
            name: '鹃形目',
            value: 2,
            children: []
          },
          {
            name: '鸨形目',
            value: 3,
            children: []
          },
          {
            name: '鹤形目',
            value: 15,
            children: []
          },
          {
            name: '鸻形目',
            value: 25,
            children: []
          },
          {
            name: '鹱形目',
            value: 2,
            children: []
          },
          {
            name: '鹳形目',
            value: 5,
            children: []
          },
          {
            name: '鲣鸟目',
            value: 8,
            children: []
          },
          {
            name: '鹈形目',
            value: 16,
            children: []
          },
          {
            name: '鹰形目',
            value: 55,
            children: []
          },
          {
            name: '鸮形目',
            value: 32,
            children: []
          },
          {
            name: '咬鹃目',
            value: 3,
            children: []
          },
          {
            name: '犀鸟目',
            value: 5,
            children: []
          },
          {
            name: '佛法僧目',
            value: 12,
            children: []
          },
          {
            name: '啄木鸟目',
            value: 8,
            children: []
          },
          {
            name: '隼形目',
            value: 12,
            children: []
          },
          {
            name: '鹦形目',
            value: 9,
            children: []
          },
          {
            name: '雀形目',
            value: 89,
            children: []
          }
        ]
      },
      {
        name: '爬行纲',
        value: 94,
        children: [
          {
            name: '龟鳖目',
            value: 21,
            children: []
          },
          {
            name: '有鳞目',
            value: 72,
            children: []
          },
          {
            name: '鳄目',
            value: 1,
            children: []
          }
        ]
      },
      {
        name: '两栖纲',
        value: 93,
        children: [
          {
            name: '无尾目',
            value: 28,
            children: []
          },
          {
            name: '有尾目',
            value: 64,
            children: []
          },
          {
            name: '蚓螈目',
            value: 1,
            children: []
          }
        ]
      },
      {
        name: '文昌鱼纲',
        value: 2,
        children: [
          {
            name: '文昌鱼目',
            value: 2,
            children: []
          }
        ]
      },
      {
        name: '圆口纲',
        value: 3,
        children: [
          {
            name: '七鳃鳗目',
            value: 3,
            children: []
          }
        ]
      },
      {
        name: '软骨鱼纲',
        value: 4,
        children: [
          {
            name: '鼠鲨目',
            value: 2,
            children: []
          },
          {
            name: '须鲨目',
            value: 1,
            children: []
          },
          {
            name: '鲼目',
            value: 1,
            children: []
          }
        ]
      },
      {
        name: '硬骨鱼纲',
        value: 83,
        children: [
          {
            name: '鲟形目',
            value: 8,
            children: []
          },
          {
            name: '鳗鲡目',
            value: 1,
            children: []
          },
          {
            name: '鲱形目',
            value: 1,
            children: []
          },
          {
            name: '鲤形目',
            value: 49,
            children: []
          },
          {
            name: '鲇形目',
            value: 10,
            children: []
          },
          {
            name: '鲑形目',
            value: 10,
            children: []
          },
          {
            name: '海龙鱼目',
            value: 1,
            children: []
          },
          {
            name: '鲈形目',
            value: 2,
            children: []
          },
          {
            name: '鲉形目',
            value: 1,
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '节肢动物门',
    value: 79,
    children: [
      {
        name: '昆虫纲',
        value: 75,
        children: [
          {
            name: '双尾目',
            value: 1,
            children: []
          },
          {
            name: '䗛目',
            value: 10,
            children: []
          },
          {
            name: '蜻蜓目',
            value: 2,
            children: []
          },
          {
            name: '缺翅目',
            value: 2,
            children: []
          },
          {
            name: '蛩蠊目',
            value: 2,
            children: []
          },
          {
            name: '脉翅目',
            value: 1,
            children: []
          },
          {
            name: '鞘翅目',
            value: 33,
            children: []
          },
          {
            name: '鳞翅目',
            value: 24,
            children: []
          }
        ]
      },
      {
        name: '蛛形纲',
        value: 1,
        children: [
          {
            name: '蜘蛛目',
            value: 1,
            children: []
          }
        ]
      },
      {
        name: '肢口纲',
        value: 2,
        children: [
          {
            name: '剑尾目',
            value: 2,
            children: []
          }
        ]
      },
      {
        name: '软甲纲',
        value: 1,
        children: [
          {
            name: '十足目',
            value: 1,
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '软体动物门',
    value: 21,
    children: [
      {
        name: '双壳纲',
        value: 15,
        children: [
          {
            name: '珍珠贝目',
            value: 1,
            children: []
          },
          {
            name: '帘蛤目',
            value: 6,
            children: []
          },
          {
            name: '蚌目',
            value: 8,
            children: []
          }
        ]
      },
      {
        name: '头足纲',
        value: 1,
        children: [
          {
            name: '鹦鹉螺目',
            value: 1,
            children: []
          }
        ]
      },
      {
        name: '腹足纲',
        value: 5,
        children: [
          {
            name: '原始腹足目',
            value: 1,
            children: []
          },
          {
            name: '中腹足目',
            value: 4,
            children: []
          }
        ]
      }
    ]
  }
]
export default {
  title: {
    text: title,
    // subtext: '等级分布',
    left: 'center'
  },
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 100,
    right: 0,
    bottom: '10%',
    inRange: {
      color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
    }
  },
  series: {
    type: 'sunburst',
    data: data,
    center: ['50%', '50%'],
    radius: [0, '85%'],
    label: {
      rotate: 'radial'
    }
  }
}
