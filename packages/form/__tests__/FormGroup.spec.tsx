import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FormGroup } from '../src';

describe('FormGroup', () => {
  it('renders', () => {
    render(
      <FormGroup data-test-id="testing" isInvalid>
        <></>
      </FormGroup>
    );
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });
});
