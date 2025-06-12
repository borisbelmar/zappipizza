import PropTypes from 'prop-types'
import cn from '@utils/cn'
import UberEatsLogo from './UberEatsLogo'

export default function UberEatsButton({ className, hideLabel, logoClassName }) {
  return (
    <a href="https://order.store/store/zappipizza/Lbi2NiUZSXWlhbGutqQFQg" target="_blank" rel="noopener noreferrer" className="inline-flex">
      <button
        type="button"
        className={cn(
          'bg-[#5fb709] text-white text-xs flex flex-col justify-center items-center px-2 py-3 rounded font-display font-bold hover:opacity-75 transition',
          className
        )}
      >
        {!hideLabel && (
          <span className="mb-1">
            Pide ahora por
          </span>
        )}
        <UberEatsLogo
          className={cn('h-3', logoClassName)}
          eatsColor="white"
        />
      </button>
    </a>
  )
}

UberEatsButton.propTypes = {
  className: PropTypes.string,
  logoClassName: PropTypes.string,
  hideLabel: PropTypes.bool
}

UberEatsButton.defaultProps = {
  className: '',
  hideLabel: false,
  logoClassName: ''
}
