export default function CurvedDivider({ toColor = '#F5F0E8', flipped = false }) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ transform: flipped ? 'scaleY(-1)' : 'none', marginBottom: flipped ? '-1px' : undefined, marginTop: flipped ? undefined : '-1px' }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        style={{ height: '80px' }}
      >
        <path
          d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
          fill={toColor}
        />
      </svg>
    </div>
  )
}
