import MVT from 'ol/format/MVT';

export default class MLVT extends MVT {
    constructor(opt_options) {
      super();
    }
  
    readFeatures(source, opt_options) {
      try {
        return super.readFeatures(source, opt_options);
      } catch (error) {
        console.log(error);
        return [];
      }
  
    }
  }
