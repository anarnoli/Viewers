import React, { useCallback } from 'react';
//
import PanelStudyBrowser from './StudyBrowser/PanelStudyBrowser';
import getImageSrcFromImageId from './getImageSrcFromImageId';
import getStudiesForPatientByMRN from './getStudiesForPatientByMRN';
import requestDisplaySetCreationForStudy from './requestDisplaySetCreationForStudy';
import { useSystem } from '@ohif/core';

/**
 * Wraps the PanelStudyBrowser and provides features afforded by managers/services
 *
 * @param {object} params
 * @param {object} commandsManager
 * @param {object} extensionManager
 */
function WrappedPanelStudyBrowser() {
  const { extensionManager } = useSystem();
  // TODO: This should be made available a different way; route should have
  // already determined our datasource
  const [dataSource] = extensionManager.getActiveDataSource();
  const _getStudiesForPatientByMRN = getStudiesForPatientByMRN.bind(null, dataSource);
  const _getImageSrcFromImageId = useCallback(
    _createGetImageSrcFromImageIdFn(extensionManager),
    []
  );
  const _requestDisplaySetCreationForStudy = requestDisplaySetCreationForStudy.bind(
    null,
    dataSource
  );

  return (
    <PanelStudyBrowser
      dataSource={dataSource}
      getImageSrc={_getImageSrcFromImageId}
      getStudiesForPatientByMRN={_getStudiesForPatientByMRN}
      requestDisplaySetCreationForStudy={_requestDisplaySetCreationForStudy}
    />
  );
}

/**
 * Grabs cornerstone library reference using a dependent command from
 * the @ohif/extension-cornerstone extension. Then creates a helper function
 * that can take an imageId and return an image src.
 *
 * @param {func} getCommand - CommandManager's getCommand method
 * @returns {func} getImageSrcFromImageId - A utility function powered by
 * cornerstone
 */
function _createGetImageSrcFromImageIdFn(extensionManager) {
  const utilities = extensionManager.getModuleEntry(
    '@ohif/extension-cornerstone.utilityModule.common'
  );

  try {
    const { cornerstone } = utilities.exports.getCornerstoneLibraries();
    return getImageSrcFromImageId.bind(null, cornerstone);
  } catch (ex) {
    throw new Error('Required command not found');
  }
}

export default WrappedPanelStudyBrowser;
