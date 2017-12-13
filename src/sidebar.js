import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

export class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      selectedDoctorId: null,
      doctors: [],
    };
  }

  componentDidMount() {
  	// fetch data here and
  	// this.setState({ doctors: fetechedDoctors })

  	var url = "http://localhost:8080/doctors";
    Request.get(url).then((response) => {
      this.setState({      	
        doctors: response.body       
      })
      console.log(response.body);
    });

  }

  render() {
  	if (this.state.doctors.length === 0) {
  		return <div>loading..</div>
  	}

  	var doctors = _.map(this.state.doctors, (doctor) => {
  		return <ul>{doctor.name}</ul>
  	});

  	return (
  		
  		<div>
  			<ul>{ this.state.doctors[0].name } </ul>                          			                     
  			<br/>
  			<ul>{doctors}</ul>

  		</div>

  		)
  }
}