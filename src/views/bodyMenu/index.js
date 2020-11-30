import React from 'react';
import Header from '../../components/header';
import Button from '../../components/button';
const BodyMenu = () => {
  return (
    <>
      <Header title="Body Menu" backTo="/home" />
      <Button linkTo="/foodMenu" title="Food Intake Tracker" size="big" />
      <Button linkTo="/waterMenu" title="Water Intake Tracker" size="big" />
      <Button linkTo="/seeMedicines" title="Medicine Tracker" size="big" />
    </>
  );
};

export default BodyMenu;
