import React, { Component } from 'react';
import { TextField } from 'react-md';
import { Button, SVGIcon } from 'react-md';
import AddEmployees from './AddEmployees';
import { Card, CardTitle, CardText } from 'react-md';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
} from 'react-md';

export default class ViewPage extends React.Component {
  render() {
    const { firstname,lastname,id,date,email,number,des} = this.props;
    return (
      <div >

        <DataTable plain>
            <TableBody>
           <TableRow>
               <TableColumn>{firstname}</TableColumn>
              <TableColumn>{lastname}</TableColumn>
              <TableColumn>{id}</TableColumn>
              <TableColumn>{date}</TableColumn>
              <TableColumn>{email}</TableColumn>
              <TableColumn>{number}</TableColumn>
              <TableColumn>{des}</TableColumn>
              </TableRow>

          </TableBody>
        </DataTable>
         
      </div>
    );
  }
}