export default function BlobBackground({ color = '#D4A853', className = '', opacity = 0.18 }) {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <g transform="translate(300,300)">
        <path
          d="M120,-157.6C152.7,-141.5,174.3,-102.6,185.4,-61.7C196.5,-20.8,197.1,22.1,183.3,59.9C169.5,97.7,141.3,130.4,106.6,152.8C71.9,175.1,30.8,187.1,-14.8,189.7C-60.4,192.3,-110.5,185.5,-143.8,161.2C-177.1,136.9,-193.6,95.1,-199.2,52.4C-204.8,9.7,-199.5,-33.9,-181.4,-70.8C-163.3,-107.7,-132.4,-137.9,-97.5,-153.4C-62.6,-168.9,-23.7,-169.7,15.2,-188.2C54.1,-206.7,87.3,-173.7,120,-157.6Z"
          fill={color}
          fillOpacity={opacity}
        />
      </g>
    </svg>
  )
}
