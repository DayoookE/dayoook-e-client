import { Radar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { GraphFaceImg } from '../../../assets/Mypage'
import * as s from './Statistics.style'

Chart.register(...registerables)
const shadowPlugin = {
  id: 'shadowPlugin',
  beforeDatasetsDraw(chart) {
    const { ctx } = chart
    ctx.save()
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
    ctx.shadowBlur = 10
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
  },
  afterDatasetsDraw(chart) {
    const { ctx } = chart
    ctx.restore()
  },
}
Chart.register(shadowPlugin)

export default function Statistics() {
  return (
    <div>
      <s.Title>학습 분석</s.Title>
      <s.RadarChartWrapper>
        <Radar data={getChartData()} options={options} />
        <s.RadarChatImg src={GraphFaceImg} alt="그래프 얼굴" />
      </s.RadarChartWrapper>
    </div>
  )
}

const getChartData = () => {
  return {
    labels: ['말하기', '', '쓰기', '', '문법', '', '읽기', '', '듣기', ''],
    datasets: [
      {
        label: 'Skillset',
        backgroundColor: '#ACEBAF',
        borderColor: '#ACEBAF',
        borderWidth: 2,
        lineTension: 0.4,
        data: [60, 50, 80, 60, 70, 60, 75, 65, 85, 50],
        pointRadius: 0,
      },
    ],
  }
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      min: 0,
      max: 100,
      angleLines: {
        display: true,
        color: (ctx) => {
          return ctx.index % 2 === 0 ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
        },
      },
      grid: {
        circular: true,
        background: ['pink', 'rgba(150, 150, 255, 0.4)'],
        lineWidth: 1.5,
      },
      ticks: {
        stepSize: 100,
        display: false,
      },
      pointLabels: {
        callback: (label, index) => {
          return index % 2 === 0 ? label : ''
        },
        font: {
          size: 12,
        },
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}
