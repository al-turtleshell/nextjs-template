const isBackofficePathCheck = (currentUrl: string, updateFn: (val: boolean) => void): void => {
  const isBackofficePath = currentUrl.includes('/backoffice');
  updateFn(isBackofficePath);
};

export default isBackofficePathCheck;
