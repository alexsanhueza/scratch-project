/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router';
import ItemCard from './ItemCard.jsx';
import AddItem from './AddItem';
import '../scss/app.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    // tracks AddItem values
  }

  /*------TODO-----*/

  // define method to handle user input
  // tracks input for login/signup forms - assign input field a 'name' attribute that corresponds to state prop
  // handleChange(e) {
  //   // add as onchange method
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  // define method to send input to DB upon submission
  /*------SUBMIT IMAGE UPLOAD-----*/

  // handleFileChange(e) {
  //   console.log('input Image:', e.target.value);
  //   this.setState({
  //     itemImage:
  //       e.target
  //         .value /**URL.createObjectURL(e.target.files[0]) is probably only for displaying a temp image */,
  //   });
  // }

  render() {
    const { allItems } = this.props; // provides this.state.allItems as an array
    console.log(allItems);
    console.log(this.props.sendMessage);
    // define *map method to transform allItems into char cards
    const cards = allItems.map((item) => {
      return (
        <section className="cardContainer">
          <ItemCard
            item={item}
            // name={item.itemTitle}
            // userid={item.itemUserId}
            // location={item.itemAddress}
            // status={item.itemStatus}
            sendMessageButton={this.props.sendMessage}
            inProfile={false}
          />
        </section>
      );
    });
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />
    // }
    return (
      <>
        <section className="innerNav">
          <section className="leftNav">
            <h6>sort by: </h6>
            {/* <!-- Button trigger modal --> */}
            <div class="dropdown show">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">
                  Appliances
                </a>
                <a class="dropdown-item" href="#">
                  Sports
                </a>
                <a class="dropdown-item" href="#">
                  Kitchen
                </a>
                <a class="dropdown-item" href="#">
                  Clothing
                </a>
              </div>
            </div>
          </section>
          <section className="rightNav">
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-dark addItemBtn"
              data-toggle="modal"
              data-target="#addItemModal"
            >
              Add Item
            </button>
          </section>
        </section>
        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="addItemModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">
                  Add an Item
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddItem
                  handleChange={this.props.handleChange}
                  handleSubmit={this.props.handleSubmit}
                  handleFileChange={this.props.handleFileChange}
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={(e) => this.props.handleSubmit(e)}
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* CARDS DISPLAY */}
        <section className="itemsContainer">{cards}</section>
      </>
    );
  }
}

export default Home;
