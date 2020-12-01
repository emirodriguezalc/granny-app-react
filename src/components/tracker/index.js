import React from 'react';
import Button from '../button';
import Header from '../header';
import './styles.css';
import './toggle.css';

const Tracker = ({ view }) => (
  <div className={view.viewName}>
    <Header title={view.title} backTo="/bodymenu" />
    <div className="content-wrapper">
      {view.list.map(l => {
        return (
          <section className="section--text">
            {l.text}
            <div className="toggle-wrapper">
              <input name={l.name} id={l.name} type="checkbox" />
              <label for={l.name}></label>
            </div>
          </section>
        );
      })}
    </div>
    <Button title="Submit and go back" linkTo="/bodyMenu" size="big" />
  </div>
);

export default Tracker;
