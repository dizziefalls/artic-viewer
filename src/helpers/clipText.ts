export default function clipText(text: string) {
  if (text.length > 45) return text.substring(0, 42).trim() + '...'
  return text
}