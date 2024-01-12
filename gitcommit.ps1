# Ask for a commit message
Write-Host "Enter commit message:"
$commitMessage = Read-Host

# Execute git commands
git add .
git commit -m "$commitMessage"
git push
