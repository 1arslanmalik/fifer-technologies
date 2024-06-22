import { Html, Heading, Text } from "@react-email/components"
const EmailTemplate = ({
  name,
  email,
  message
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">Fifer Technologies</Heading>
      <Text><b>Name: </b>{name}</Text>
      <Text><b>Email: </b>{email}</Text>
      <Text><b>Message: </b>{message}</Text>
    </Html>
  )
}
export default EmailTemplate