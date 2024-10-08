# Lower level research
Default *key server* for querying public key is [keyserver.ubuntu.com](http://keyserver.ubuntu.com). Proof: https://github.com/gpg/gnupg/blob/master/configure.ac

* *private key* creates signature
* *public key* verify signature
* verifier can extract the GPG *key ID* from the signature file and then search for *public key* from key server with the extracted key ID (this is how Maven central repository verify the jar signature)

# Generate a key and use it in Github Pipeline for publishing jar to Maven central repository
`gpg --generate-key`

## Export secret key to an `.asc` file
`gpg --export-secret-keys --armor -o private_key.asc dictionary`

After the private key is exported to the `private_key.asc`, copy and paste it to the corresponding variable in Github Settings > *Secrets and variables* > *Actions*


# Remove a key
command: `gpg --delete-keys CAF255EAB0A71CC214A32449CC713E9B0CEC0C17`

Note that the command above would not work since the **first step should be to remove the secret key**

## Remove *secret key* as the first step
command: `gpg --delete-scret-keys CAF255EAB0A71CC214A32449CC713E9B0CEC0C17` where the last parameter is the *key id*

Comment: after removing the local secret key, I tried to run the Github action to publish the jar again and it works! This proves that **the requirement to publish a jar to the Maven central repository: a secret key in the publisher + public key added to a public key server**

## 2. Remove the key: `gpg --delete-keys CAF255EAB0A71CC214A32449CC713E9B0CEC0C17`
NOTE 
* after this operation `gpg --list-keys` should not list the deleted key,
*  the key stays in the remove *key server* in any case

## Directly remove a public key from a key server is impossible, the only possible way is to generate a *revocation certificate*
Requirement on generating a *revocation certificate* : key has to keep integrity, i.e. both private and public key in *keyring* exists yet
Command to generate a *revocation certificate* : `gpg --generate-revocation dictionary` where `dictionary` is the *user-id*

# `gpg --verify <signaure.asc> <file_to_verify>`
NOTE! `gpg --verify` assumes that you have the *public key* in your local. So in case you don't have a public key there will be error message output like this

```
gpg: Signature made pe  2. elokuuta 2024 00.57.33 EEST
gpg:                using EDDSA key 894F14D98D7F20D5E82645E3DFE102108BF9381F
gpg: Can't check signature: No public key
```
Then the next action is to get the *public key* from *key server* in the next section

# `gpg --keyserver keyserver.ubuntu.com --recv-keys <key_id_from_verify_err_msg>`
NOTE! This commnd can ignore `--keyserver` option, and thus the *public key* will be searched from default *key server* keyserver.ubuntu.com




