
export const measureRenderTime = (componentName, renderFunction) => {
  if (process.env.NODE_ENV !== "development") {
    return renderFunction();
  }

  const startTime = performance.now();
  const result = renderFunction();
  const endTime = performance.now();

  console.log(
    `${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`
  );

  return result;
};

export const withPerformanceMonitoring = (WrappedComponent, componentName) => {
  if (process.env.NODE_ENV !== "development") {
    return WrappedComponent;
  }

  const PerformanceWrapper = (props) => {
    return measureRenderTime(componentName || WrappedComponent.name, () => (
      <WrappedComponent {...props} />
    ));
  };

  PerformanceWrapper.displayName = `withPerformanceMonitoring(${
    componentName || WrappedComponent.name
  })`;

  return PerformanceWrapper;
};

export const logPropChanges = (componentName, prevProps, nextProps) => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const changedProps = {};
  const allKeys = new Set([
    ...Object.keys(prevProps),
    ...Object.keys(nextProps),
  ]);

  allKeys.forEach((key) => {
    if (prevProps[key] !== nextProps[key]) {
      changedProps[key] = {
        from: prevProps[key],
        to: nextProps[key],
      };
    }
  });

  if (Object.keys(changedProps).length > 0) {
    console.log(`${componentName} prop changes:`, changedProps);
  }
};
