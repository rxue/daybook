# File System
## `/usr/local/bin`

# Files
files with `rc` *affix*

# Linux VS macOS
... 				                    | Linux | Darwin  | proved by command
--------------------------------|-------|---------|-------------------
case sensitive                  | YES   | **NO**  | none
Terminal's default support Shell| `zsh` | `bash`  | `echo $SHELL`
`/etc/vim` dir for `vim`        | YES   | NO      | `ls /etc/vim`
`/etc/vim/vimrc.local` for `vim`| YES   | NO      | `ls /etc/vim/vimrc.local`

### Relevant Problem
When working with MacBook, I used *Homebrew* to install *Maven* and thus the `mvn` was installed to `/opt/homebrew/bin`. As a result, I was not able to directly `mvn` in terminal since the `mvn` is not in `/usr/bin`. In order to be able to `mvn` directly in terminal I tried to make a *symbolic link* in `/usr/bin`, but *MacOS* does not accept adding anything to `/usr/bin` through terminal.

In the case above, `/usr/local/bin` comes into play

REASONING: based on ChatGPT's answer, `/usr/local/bin/` is included in the default system `$PATH`. I checked with my home Ubuntu and work MacBook. Both are like this

# 25 The Basic Program/System Interface
## [Envrionment Variables](https://www.gnu.org/software/libc/manual/html_node/Environment-Variables.html)
> ...Programs executed from the shell inherit all fo the environment variables from the shell
# Keyboard shortcut in *Terminal*
ctrl + W - remove one word backword in the currently writing command line
