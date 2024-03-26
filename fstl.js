import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class VerifySig {
    public static void main(String[] args) {
        // Message details
        String message = "I, hereby verify that I am the owner/creator of the following addresses: [0x27f832d6835c279ABD8c827039F9EF7c975C4b04], [0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619], [0xc2132D05D31c914a87C6611C10748AEb04B58e8F], and also leave a json file that says it's created by \"Fragsteel Production\" (www.fragsteel.com, fragsteel@fragsteel.com)";

        // Calculate message hash
        String messageHash = getMessageHash(message);

        // Print the message hash
        System.out.println("Message Hash: " + messageHash);
    }

    public static String getMessageHash(String message) {
        try {
            // Create a MessageDigest instance for SHA-256
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Compute the hash value
            byte[] hashBytes = digest.digest(message.getBytes(StandardCharsets.UTF_8));

            // Convert the hash bytes to hexadecimal string
            StringBuilder hexString = new StringBuilder();
            for (byte hashByte : hashBytes) {
                String hex = Integer.toHexString(0xff & hashByte);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }

            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
}
