import React, { useEffect } from 'react';
import styled from 'styled-components';
import PowerOn from './PowerOn';
import PowerOff from './PowerOff';
import PowerSaving from './PowerSaving';
import PowerSelect from './PowerSelect';
import { POWER_STATE } from '../../store/module/power';

const StyledPowerScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10000000;
`;

const renderSwitch = (powerState, unmountPowerScreen, changePowerState) => {
  switch (powerState) {
    case POWER_STATE.off:
      return <PowerOff changePowerState={changePowerState}></PowerOff>;

    case POWER_STATE.on:
      return <PowerOn unmountPowerScreen={unmountPowerScreen}></PowerOn>;

    case POWER_STATE.selectMode:
      return <PowerSelect changePowerState={changePowerState} unmountPowerScreen={unmountPowerScreen}></PowerSelect>;

    case POWER_STATE.restart:
      return <PowerOn unmountPowerScreen={unmountPowerScreen}></PowerOn>;

    case POWER_STATE.saveMode:
      return <PowerSaving unmountPowerScreen={unmountPowerScreen}></PowerSaving>;

    default:
      break;
  }
};

function PowerScreen({ isRequiredPowerScreen, powerState, unmountPowerScreen, changePowerState, closeAllPrograms }) {
  useEffect(() => {
    if (powerState === POWER_STATE.off || powerState === POWER_STATE.restart) {
      closeAllPrograms();
    }
  }, [powerState]);
  return (
    <>
      {isRequiredPowerScreen ? (
        <StyledPowerScreen>{renderSwitch(powerState, unmountPowerScreen, changePowerState)}</StyledPowerScreen>
      ) : (
        ''
      )}
    </>
  );
}

export default PowerScreen;
