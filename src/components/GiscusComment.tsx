import Giscus from "@giscus/react"
import { useEffect, useRef, useState } from "react"

const GiscusComment = () => {
    const [theme, setTheme] = useState('preferred_color_scheme')
    const observerLock = useRef(false)
  
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute('data-theme'))
    }
    
    useEffect(() => {
      setTheme(document.documentElement.getAttribute('data-theme'))
      if (!observerLock.current) {
        observerLock.current = true
        const observer = new MutationObserver(() => {
          updateTheme()
        })
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['data-theme'],
        })
      }
    }, [])
  
    return (
      <div style={{
        paddingTop: '2rem',
      }}>
        <Giscus 
          repo='DenpaNote/kyojintachi'
          repoId='R_kgDOL_ERAQ'
          category='General'
          categoryId='DIC_kwDOL_ERAc4Cfis-'
          mapping='pathname'
          strict='0'
          reactionsEnabled='1'
          emitMetadata='0'
          inputPosition='bottom'
          theme={theme}
          lang='zh-CN'
          loading='lazy'
        />
      </div>
    )
}

export default GiscusComment
