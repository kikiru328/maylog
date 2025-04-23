export const og: SocialImageOptions["Component"] = (
  cfg,
  fileData,
  { colorScheme },
  title,
  description,
  fonts
) => {
  let created: string | undefined
  let reading: string | undefined

  if (fileData.dates) {
    created = formatDate(getDate(cfg, fileData)!, cfg.locale)
  }
  const { minutes } = readingTime(fileData.text!)
  reading = i18n(cfg.locale).components.contentMeta.readingTime({
    minutes: Math.ceil(minutes),
  })

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "3rem",
      width: "100%",
      height: "100%",
      backgroundImage: `url("https://${cfg.baseUrl}/static/og-image.jpeg")`,
      backgroundSize: "cover"
    }}>
      <h1 style={{ fontSize: "4rem", fontFamily: fonts[0].name }}>{title}</h1>
      <p style={{ fontFamily: fonts[1].name }}>{created} · {reading}</p>
      <p style={{ fontFamily: fonts[1].name }}>{description}</p>
    </div>
  )
}
