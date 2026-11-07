// Run: node --experimental-strip-types scripts/check-socials.js
import assert from 'node:assert'
import { parseCompact, parseFeed } from '../src/lib/server/socials.ts'

assert.equal(parseCompact('4.98K'), 4980)
assert.equal(parseCompact('1,234'), 1234)
assert.equal(parseCompact('2.1M'), 2100000)
assert.ok(Number.isNaN(parseCompact('')))

const [episode] = parseFeed(
	"<entry><yt:videoId>abc</yt:videoId><title>Benefits of &quot;Monk Mode&quot; - Tice's Tech Trek Podcast #6</title><published>2024-03-01</published></entry>"
)
assert.equal(episode.title, 'Benefits of "Monk Mode"')
assert.equal(episode.number, '6')
assert.equal(episode.thumbnail, 'https://i.ytimg.com/vi/abc/mqdefault.jpg')

console.log('socials ok')
