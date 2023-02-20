const useIsEnglish = () => {
  return !window.location.pathname.includes('/zh-CN')
}

export default useIsEnglish
