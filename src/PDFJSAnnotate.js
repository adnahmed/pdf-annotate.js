import LocalStoreAdapter from './adapter/LocalStoreAdapter';
import LocalUserStoreAdapter from './adapter/LocalUserStoreAdapter';
import StoreAdapter from './adapter/StoreAdapter';
import config from './config';
import render from './render';
import UI from './UI';
import {
  convertToScreenPoint,
  findAnnotationAtPoint,
  findSVGContainer
} from './UI/utils';
import uuid from './utils/uuid';

export default {
  findAnnotationAtPoint,
  findSVGContainer,
  convertToScreenPoint,

  /**
   * Abstract class that needs to be defined so PDFJSAnnotate
   * knows how to communicate with your server.
   */
  StoreAdapter,

  /**
   * Implementation of StoreAdapter that stores annotation data to localStorage.
   */
  LocalStoreAdapter,

  /**
   * Implementation of StoreAdapter that stores annotation data to localStorage particular
   * to a specific user
   */
  LocalUserStoreAdapter,

  /**
   * Abstract instance of StoreAdapter
   */
  __storeAdapter: new StoreAdapter(),

  /**
   * Getter for the underlying StoreAdapter property
   *
   * @return {StoreAdapter} The current StoreAdapter
   */
  getStoreAdapter() {
    return this.__storeAdapter;
  },

  /**
   * Setter for the underlying StoreAdapter property
   *
   * @param {StoreAdapter} adapter The StoreAdapter implementation to be used.
   */
  setStoreAdapter(adapter) {
    // TODO this throws an error when bundled
    // if (!(adapter instanceof StoreAdapter)) {
    //   throw new Error('adapter must be an instance of StoreAdapter');
    // }

    this.__storeAdapter = adapter;
  },

  /**
   * UI is a helper for instrumenting UI interactions for creating,
   * editing, and deleting annotations in the browser.
   */
  UI,

  /**
   * Render the annotations for a page in the PDF Document
   *
   * @param {SVGElement} svg The SVG element that annotations should be rendered to
   * @param {PageViewport} viewport The PDFPage.getViewport data
   * @param {Object} data The StoreAdapter.getAnnotations data
   * @return {Promise}
   */
  render,

  /**
   * Convenience method for getting annotation data
   *
   * @alias StoreAdapter.getAnnotations
   * @param {String} documentId The ID of the document
   * @param {String} pageNumber The page number
   * @return {Promise} Promise that returns with list of annotations for document and page
   */
  getAnnotations(documentId, pageNumber) {
    return this.getStoreAdapter().getAnnotations(...arguments);
  },

  config,

  uuid
};
