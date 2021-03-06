var WMTS_1_0_Module_Factory = function () {
  var WMTS_1_0 = {
    n: 'WMTS_1_0',
    dens: 'http:\/\/www.opengis.net\/wmts\/1.0',
    deps: ['OWS_1_1_0', 'GML_3_1_1'],
    tis: [{
        ln: 'ContentsType',
        bti: 'OWS_1_1_0.ContentsBaseType',
        ps: [{
            n: 'tileMatrixSet',
            mno: 0,
            col: true,
            en: 'TileMatrixSet',
            ti: '.TileMatrixSet'
          }]
      }, {
        ln: 'URLTemplateType',
        ps: [{
            n: 'format',
            rq: true,
            an: {
              lp: 'format'
            },
            t: 'a'
          }, {
            n: 'resourceType',
            rq: true,
            an: {
              lp: 'resourceType'
            },
            t: 'a'
          }, {
            n: 'template',
            rq: true,
            an: {
              lp: 'template'
            },
            t: 'a'
          }]
      }, {
        ln: 'Theme',
        tn: null,
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'identifier',
            rq: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'theme',
            mno: 0,
            col: true,
            en: 'Theme',
            ti: '.Theme'
          }, {
            n: 'layerRef',
            mno: 0,
            col: true,
            en: 'LayerRef'
          }]
      }, {
        ln: 'LayerType',
        bti: 'OWS_1_1_0.DatasetDescriptionSummaryBaseType',
        ps: [{
            n: 'style',
            rq: true,
            col: true,
            en: 'Style',
            ti: '.Style'
          }, {
            n: 'format',
            rq: true,
            col: true,
            en: 'Format'
          }, {
            n: 'infoFormat',
            mno: 0,
            col: true,
            en: 'InfoFormat'
          }, {
            n: 'dimension',
            mno: 0,
            col: true,
            en: 'Dimension',
            ti: '.Dimension'
          }, {
            n: 'tileMatrixSetLink',
            rq: true,
            col: true,
            en: 'TileMatrixSetLink',
            ti: '.TileMatrixSetLink'
          }, {
            n: 'resourceURL',
            mno: 0,
            col: true,
            en: 'ResourceURL',
            ti: '.URLTemplateType'
          }]
      }, {
        ln: 'Capabilities',
        tn: null,
        bti: 'OWS_1_1_0.CapabilitiesBaseType',
        ps: [{
            n: 'contents',
            en: 'Contents',
            ti: '.ContentsType'
          }, {
            n: 'themes',
            mno: 0,
            col: true,
            en: 'Themes',
            ti: '.Themes'
          }, {
            n: 'wsdl',
            mno: 0,
            col: true,
            en: 'WSDL',
            ti: 'OWS_1_1_0.OnlineResourceType'
          }, {
            n: 'serviceMetadataURL',
            mno: 0,
            col: true,
            en: 'ServiceMetadataURL',
            ti: 'OWS_1_1_0.OnlineResourceType'
          }]
      }, {
        ln: 'FeatureInfoResponse',
        tn: null,
        ps: [{
            n: 'featureCollection',
            rq: true,
            en: {
              lp: '_FeatureCollection',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractFeatureCollectionType'
          }, {
            n: 'textPayload',
            rq: true,
            en: 'TextPayload',
            ti: '.TextPayload'
          }, {
            n: 'binaryPayload',
            rq: true,
            en: 'BinaryPayload',
            ti: '.BinaryPayload'
          }, {
            n: 'anyContent',
            rq: true,
            en: 'AnyContent',
            ti: 'AnyType'
          }]
      }, {
        ln: 'Themes',
        tn: null,
        ps: [{
            n: 'theme',
            mno: 0,
            col: true,
            en: 'Theme',
            ti: '.Theme'
          }]
      }, {
        ln: 'TileMatrixSetLink',
        tn: null,
        ps: [{
            n: 'tileMatrixSet',
            rq: true,
            en: 'TileMatrixSet'
          }, {
            n: 'tileMatrixSetLimits',
            en: 'TileMatrixSetLimits',
            ti: '.TileMatrixSetLimits'
          }]
      }, {
        ln: 'GetFeatureInfo',
        tn: null,
        ps: [{
            n: 'getTile',
            rq: true,
            en: 'GetTile',
            ti: '.GetTile'
          }, {
            n: 'j',
            rq: true,
            en: 'J',
            ti: 'Integer'
          }, {
            n: 'i',
            rq: true,
            en: 'I',
            ti: 'Integer'
          }, {
            n: 'infoFormat',
            rq: true,
            en: 'InfoFormat'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'LegendURL',
        tn: null,
        bti: 'OWS_1_1_0.OnlineResourceType',
        ps: [{
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }, {
            n: 'minScaleDenominator',
            ti: 'Double',
            an: {
              lp: 'minScaleDenominator'
            },
            t: 'a'
          }, {
            n: 'maxScaleDenominator',
            ti: 'Double',
            an: {
              lp: 'maxScaleDenominator'
            },
            t: 'a'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'DimensionNameValue',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextPayload',
        tn: null,
        ps: [{
            n: 'format',
            rq: true,
            en: 'Format'
          }, {
            n: 'textContent',
            rq: true,
            en: 'TextContent'
          }]
      }, {
        ln: 'TileMatrix',
        tn: null,
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'identifier',
            rq: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'scaleDenominator',
            rq: true,
            en: 'ScaleDenominator',
            ti: 'Double'
          }, {
            n: 'topLeftCorner',
            rq: true,
            en: 'TopLeftCorner',
            ti: {
              t: 'l',
              bti: 'Double'
            }
          }, {
            n: 'tileWidth',
            rq: true,
            en: 'TileWidth',
            ti: 'Integer'
          }, {
            n: 'tileHeight',
            rq: true,
            en: 'TileHeight',
            ti: 'Integer'
          }, {
            n: 'matrixWidth',
            rq: true,
            en: 'MatrixWidth',
            ti: 'Integer'
          }, {
            n: 'matrixHeight',
            rq: true,
            en: 'MatrixHeight',
            ti: 'Integer'
          }]
      }, {
        ln: 'TileMatrixSet',
        tn: null,
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'identifier',
            rq: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'boundingBox',
            mx: false,
            dom: false,
            en: {
              lp: 'BoundingBox',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.BoundingBoxType',
            t: 'er'
          }, {
            n: 'supportedCRS',
            rq: true,
            en: {
              lp: 'SupportedCRS',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            }
          }, {
            n: 'wellKnownScaleSet',
            en: 'WellKnownScaleSet'
          }, {
            n: 'tileMatrix',
            rq: true,
            col: true,
            en: 'TileMatrix',
            ti: '.TileMatrix'
          }]
      }, {
        ln: 'GetTile',
        tn: null,
        ps: [{
            n: 'layer',
            rq: true,
            en: 'Layer'
          }, {
            n: 'style',
            rq: true,
            en: 'Style'
          }, {
            n: 'format',
            rq: true,
            en: 'Format'
          }, {
            n: 'dimensionNameValue',
            mno: 0,
            col: true,
            en: 'DimensionNameValue',
            ti: '.DimensionNameValue'
          }, {
            n: 'tileMatrixSet',
            rq: true,
            en: 'TileMatrixSet'
          }, {
            n: 'tileMatrix',
            rq: true,
            en: 'TileMatrix'
          }, {
            n: 'tileRow',
            rq: true,
            en: 'TileRow',
            ti: 'Integer'
          }, {
            n: 'tileCol',
            rq: true,
            en: 'TileCol',
            ti: 'Integer'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinaryPayload',
        tn: null,
        ps: [{
            n: 'format',
            rq: true,
            en: 'Format'
          }, {
            n: 'binaryContent',
            rq: true,
            en: 'BinaryContent',
            ti: 'Base64Binary'
          }]
      }, {
        ln: 'Style',
        tn: null,
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'identifier',
            rq: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'legendURL',
            mno: 0,
            col: true,
            en: 'LegendURL',
            ti: '.LegendURL'
          }, {
            n: 'isDefault',
            ti: 'Boolean',
            an: {
              lp: 'isDefault'
            },
            t: 'a'
          }]
      }, {
        ln: 'TileMatrixSetLimits',
        tn: null,
        ps: [{
            n: 'tileMatrixLimits',
            rq: true,
            col: true,
            en: 'TileMatrixLimits',
            ti: '.TileMatrixLimits'
          }]
      }, {
        ln: 'GetCapabilities',
        tn: null,
        bti: 'OWS_1_1_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'Dimension',
        tn: null,
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'identifier',
            rq: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'uom',
            en: {
              lp: 'UOM',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.DomainMetadataType'
          }, {
            n: 'unitSymbol',
            en: 'UnitSymbol'
          }, {
            n: '_default',
            en: 'Default'
          }, {
            n: 'current',
            en: 'Current',
            ti: 'Boolean'
          }, {
            n: 'value',
            rq: true,
            col: true,
            en: 'Value'
          }]
      }, {
        ln: 'TileMatrixLimits',
        tn: null,
        ps: [{
            n: 'tileMatrix',
            rq: true,
            en: 'TileMatrix'
          }, {
            n: 'minTileRow',
            rq: true,
            en: 'MinTileRow',
            ti: 'Integer'
          }, {
            n: 'maxTileRow',
            rq: true,
            en: 'MaxTileRow',
            ti: 'Integer'
          }, {
            n: 'minTileCol',
            rq: true,
            en: 'MinTileCol',
            ti: 'Integer'
          }, {
            n: 'maxTileCol',
            rq: true,
            en: 'MaxTileCol',
            ti: 'Integer'
          }]
      }, {
        t: 'enum',
        ln: 'GetFeatureInfoValueType',
        vs: ['GetFeatureInfo']
      }, {
        t: 'enum',
        ln: 'GetTileValueType',
        vs: ['GetTile']
      }, {
        t: 'enum',
        ln: 'GetCapabilitiesValueType',
        vs: ['GetCapabilities']
      }, {
        t: 'enum',
        ln: 'VersionType',
        vs: ['1.0.0']
      }, {
        t: 'enum',
        ln: 'RequestServiceType',
        vs: ['WMTS']
      }],
    eis: [{
        en: 'BinaryPayload',
        ti: '.BinaryPayload'
      }, {
        en: 'DimensionNameValue',
        ti: '.DimensionNameValue'
      }, {
        en: 'Style',
        ti: '.Style'
      }, {
        en: 'TileMatrixSet',
        ti: '.TileMatrixSet'
      }, {
        en: 'GetFeatureInfo',
        ti: '.GetFeatureInfo'
      }, {
        en: 'TileMatrixSetLink',
        ti: '.TileMatrixSetLink'
      }, {
        en: 'Layer',
        ti: '.LayerType',
        sh: {
          lp: 'DatasetDescriptionSummary',
          ns: 'http:\/\/www.opengis.net\/ows\/1.1'
        }
      }, {
        en: 'FeatureInfoResponse',
        ti: '.FeatureInfoResponse'
      }, {
        en: 'TextPayload',
        ti: '.TextPayload'
      }, {
        en: 'Themes',
        ti: '.Themes'
      }, {
        en: 'Theme',
        ti: '.Theme'
      }, {
        en: 'TileMatrixSetLimits',
        ti: '.TileMatrixSetLimits'
      }, {
        en: 'TileMatrix',
        ti: '.TileMatrix'
      }, {
        en: 'TileMatrixLimits',
        ti: '.TileMatrixLimits'
      }, {
        en: 'Capabilities',
        ti: '.Capabilities'
      }, {
        en: 'Dimension',
        ti: '.Dimension'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilities'
      }, {
        en: 'GetTile',
        ti: '.GetTile'
      }, {
        en: 'LegendURL',
        ti: '.LegendURL'
      }]
  };
  return {
    WMTS_1_0: WMTS_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WMTS_1_0_Module_Factory);
}
else {
  var WMTS_1_0_Module = WMTS_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WMTS_1_0 = WMTS_1_0_Module.WMTS_1_0;
  }
  else {
    var WMTS_1_0 = WMTS_1_0_Module.WMTS_1_0;
  }
}