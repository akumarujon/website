import fs from "node:fs";

export default defineEventHandler(async(event) => {
    const { slug } = await readBody(event)
  
    return {
      data: (fs.readFileSync('./content/blog/' + slug + '.md', 'utf8')).replace(/---([\s\S]*?)---/, ""),
    }
  })
  