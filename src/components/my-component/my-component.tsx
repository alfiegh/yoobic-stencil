import { Component, Prop, h } from '@stencil/core';
import ghusers from '../../assets/ghusers.js';
// import swapi from '../../assets/swapi.js';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() ghusers: object[];

  private getkeys = (arg: object[]) => {
    return Object.keys(arg[0]).map((key: string) => {
      const title = [key.replace('_', ' ')];
      return <th>{title}</th>;
    });
  };

  private getBody = (arg: object[]) => {
    return arg.map(obj => {
      return (
        <tr>
          {Object.values(obj).map(value => {
            return <td>{value}</td>;
          })}
        </tr>
      );
    });
  };

  render() {
    return (
      <table>
        <thead class="header">
          <tr class="header-row">{this.getkeys(ghusers)}</tr>
        </thead>
        <tbody>{this.getBody(ghusers)}</tbody>
      </table>
    );
  }
}
