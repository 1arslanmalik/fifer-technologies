import { Html, Heading, Text } from "@react-email/components"

const EmailTemplate = ({
  name,
  email,
  message
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">Fifer Technologies</Heading>
      <Text>
        <span style={{ fontWeight: 'bold' }}>Name: </span>{name}
      </Text>
      <Text>
        <span style={{ fontWeight: 'bold' }}>Email: </span>{email}
      </Text>
      <Text>
        <span style={{ fontWeight: 'bold' }}>Message: </span>{message}
      </Text>
    </Html>
  )
}

export default EmailTemplate