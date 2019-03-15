import React, { Component } from 'react';

class BugetItems extends Component {
    createBugets(item) {
        return <li key={item.key}>item.key</li>
    }

    render() {
        const bugetEntries = this.props.entries;
        //const listItems = bugetEntries.map(this.createBugets);
        return (
          <ul className="theList">

          </ul>
        );
    }
}

export default BugetItems;