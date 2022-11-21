const ExtractUnicode = (unicode: string) => {
	if (!unicode) throw new Error("No unicode string has been passed")

    let arr = [... unicode]

    let parsed: string[] = []

    arr.forEach(u => {
        let prsd = u.codePointAt(0)?.toString(16)

        if (!prsd) return

        parsed.push(prsd)
    })

    return parsed
}

export default ExtractUnicode