import { memo } from 'react';

function DefaultLayer({ children, className = '' }) {
    return (
      <div>
        {/* <div className="default-layout__slasher" /> */}
        <div className={`default-layout ${className}`}>
          <div className="default-layout__wrapper">
            {children}
          </div>
        </div>
      </div>
    );
}

export default memo(DefaultLayer);
