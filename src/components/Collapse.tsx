import React from 'react';

type CollapseProps = {
  open: boolean;
  children: React.ReactNode;
  collapsedLabel?: string;
  expandedLabel?: string;
}

function Collapse({ open, children, collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть' }: CollapseProps) {
  const [state, setState] = React.useState(open ? 'visible' : 'hidden');
  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setState(state === 'visible' ? 'hidden' : 'visible');
    contentRef.current?.setAttribute('class', state);
  }

  return (
    <>
      <button className="btn-collapse" onClick={handleClick}>
        {state === 'visible' ? expandedLabel : collapsedLabel}
      </button>
      <div className={state} ref={contentRef}>
        {children}
      </div>
    </>
  );
}

export default Collapse;
