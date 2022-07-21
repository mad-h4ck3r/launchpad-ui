import type { Offset, PopoverPlacement } from '@launchpad-ui/popover';

import { Tooltip } from '@launchpad-ui/tooltip';

import { NavItem } from './NavItem';
import './styles/Nav.css';

type NavItemWithTooltipProps = {
  to: string;
  name: string;
  end?: boolean;
  tooltipContent?: string | JSX.Element;
  tooltipPlacement?: PopoverPlacement;
  tooltipOffset?: Offset;
  onClick?(event: React.MouseEvent): void;
  id?: string;
  role?: string;
  'aria-controls'?: string;
};

const defaultContent = (
  <>
    Upgrade your plan to use this feature.
    <br />
    Click to learn more.
  </>
);

const NavItemWithTooltip = ({
  to,
  name,
  tooltipContent = defaultContent,
  onClick,
  tooltipPlacement = 'top',
  tooltipOffset,
  role,
  end,
  id,
  'aria-controls': ariaControls,
}: NavItemWithTooltipProps) => {
  const centeredContent = <div className="u-tc">{tooltipContent}</div>;
  return (
    <Tooltip
      content={centeredContent}
      placement={tooltipPlacement}
      offset={tooltipOffset}
      allowBoundaryElementOverflow
    >
      <NavItem
        end={end}
        to={to}
        name={name}
        onClick={onClick}
        role={role}
        id={id}
        aria-controls={ariaControls}
      />
    </Tooltip>
  );
};

export { NavItemWithTooltip };
export type { NavItemWithTooltipProps };