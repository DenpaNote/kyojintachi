import Giscus from "@giscus/react"

const GiscusComment = () => {
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
          theme='preferred_color_scheme'
          lang='zh-CN'
          loading='lazy'
        />
      </div>
    )
}

export default GiscusComment
