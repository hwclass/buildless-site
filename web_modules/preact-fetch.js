import { Component as d, createElement as h } from './preact.js';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

class FetchProvider extends d {
  getChildContext() {
    // eslint-disable-next-line no-unused-vars
    let _this$props = this.props,
        context = _objectWithoutProperties(_this$props, ["children"]);

    return context;
  }

  render({
    children
  }) {
    return children && children[0] ||
    /* istanbul ignore next */
    null;
  }

}

function withAsyncState({
  Component: Component$$1,
  InitialComponent,
  LoadingComponent,
  ErrorComponent
}) {
  return props => {
    let {
      asyncState
    } = props,
        RenderComponent = null;

    switch (asyncState) {
      case 'initial':
        RenderComponent = InitialComponent || Component$$1;
        break;

      case 'loading':
        RenderComponent = LoadingComponent || Component$$1;
        break;

      case 'error':
        RenderComponent = ErrorComponent || Component$$1;
        break;

      case 'resolved':
        RenderComponent = Component$$1;
        break;
    }

    return h(RenderComponent, props);
  };
}

const fetchJSON = (url, options) => fetch(url, options).then(response => response.json());

const propsToURL = (url, props) => typeof url === 'function' ? url(props) : url;

const cache = new Map();

function withFetch(url, options = {}) {
  const _useCache$options = _objectSpread({
    useCache: false
  }, options),
        {
    useCache,
    mapDataToProps,
    mapContextToProps
  } = _useCache$options,
        fetchOptions = _objectWithoutProperties(_useCache$options, ["useCache", "mapDataToProps", "mapContextToProps"]);

  return WrappedComponent => {
    return class AsyncResolve extends d {
      constructor(_props) {
        super(_props);

        _defineProperty(this, "resolveAsync", async props => {
          let rest = _extends({}, props),
              data = {};

          let resolvedURL = propsToURL(url, rest);

          if (useCache && cache.has(resolvedURL)) {
            data = cache.get(resolvedURL);
          } else {
            this.setState(() => ({
              state: 'loading'
            }));

            try {
              data = await fetchJSON(resolvedURL, fetchOptions);

              if (typeof mapDataToProps === 'function') {
                data = mapDataToProps(data);
              }
            } catch (ex) {
              this.setState(() => ({
                state: 'error'
              }));
              return;
            }
          }

          this.setState(() => {
            useCache && cache.set(resolvedURL, data);
            return {
              data,
              state: 'resolved'
            };
          });
        });

        this.state = {
          data: {},
          state: 'initial'
        };
      }

      componentWillMount() {
        let initialData = _extends({}, this.context);

        if (initialData && Object.keys(initialData).length) {
          if (typeof mapContextToProps === 'function') {
            initialData = mapContextToProps(initialData);
          }

          this.setState(() => ({
            data: initialData
          }));
        }
      }

      componentDidMount() {
        this.resolveAsync(this.props);
      }

      componentWillReceiveProps(nextProps) {
        let [current, next] = [propsToURL(url, this.props), propsToURL(url, nextProps)];

        if (current !== next) {
          this.resolveAsync(nextProps);
        }
      }

      render(props, {
        data,
        state: asyncState
      }) {
        return h(WrappedComponent, _objectSpread({
          asyncState
        }, data, props));
      }

    };
  };
}

export { FetchProvider, withAsyncState, withFetch };
