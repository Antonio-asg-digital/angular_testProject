import { Meta, Story } from '@storybook/angular';
import PureInboxScreenComponent from 'asgcomplibrary';

export default {
  title: 'Pure Inbox Screen',
  component: PureInboxScreenComponent,
} as Meta;

const Template: Story<PureInboxScreenComponent> = (args: PureInboxScreenComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  error: false,
};
