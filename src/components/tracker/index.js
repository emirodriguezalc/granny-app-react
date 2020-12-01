import React from 'react';
import Button from '../button';
import Header from '../header';
import './styles.css';
import './toggle.css';

const Tracker = ({ list, viewTitle, viewName, backTo }) => (
  <div className={viewName}>
    <Header title={viewName} backTo={backTo} />
    <div className="content-wrapper">
      <h2>{viewTitle}</h2>
      {list.list.map(l => (
        <section className="section--text">
          {l.text}
          <div className="toggle-wrapper">
            <input name={l.text} id={l.text} type="checkbox" />
            <label for={l.text}></label>
          </div>
        </section>
      ))}
    </div>
    <Button title="Submit and go back" />
  </div>
);

export default Tracker;
