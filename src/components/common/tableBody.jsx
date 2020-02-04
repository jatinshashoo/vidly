import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(item, column) {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  }

  createKey(item, column) {
    return item.id + (column.path || column.key);
  }

  render() {
    const { data, columns, idProperty } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[idProperty]}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  idProperty: "_id"
};

export default TableBody;
