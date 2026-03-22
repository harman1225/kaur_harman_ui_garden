import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Age</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Harman</TableCell>
          <TableCell>20</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};
