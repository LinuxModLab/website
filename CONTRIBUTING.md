# Contributing to Linux Mod Lab

Thank you for your interest in contributing to Linux Mod Lab!

Linux Mod Lab is an open-source initiative focused on investigating, documenting, and improving Linux compatibility for games, modifications, and related software.

Our goal is to make Linux gaming and modding more accessible through reproducible research, collaborative troubleshooting, and open development.

## Ways to Contribute

Contributions may include:

- Testing games, modifications, and compatibility tools on Linux.
- Reporting compatibility problems and documenting reproducible behavior.
- Investigating potential workarounds and solutions.
- Testing results across different Linux distributions and hardware configurations.
- Improving technical documentation and research reports.
- Contributing code, tools, or original open-source projects.
- Improving the Linux Mod Lab website.

You do not need to be a developer to contribute. Well-documented testing results are valuable.

## Compatibility Testing

When submitting test results, provide as much relevant information as possible:

- Linux distribution and kernel version.
- CPU, GPU, and graphics driver.
- Game and modification versions.
- Proton, Wine, or other compatibility-layer versions.
- Relevant settings and configuration changes.
- Steps required to reproduce the behavior.
- Observed results and supporting evidence.

If information is unavailable, identify it as "Not recorded" rather than guessing.

## Research Reports

Research reports should use the template located at:

`docs/templates/research-report.md`

Copy the template into `src/content/research/`, rename it to a descriptive Markdown filename, and update the required metadata.

Reports should distinguish between:

- **Confirmed findings:** Observations supported by documented testing.
- **Hypotheses:** Possible explanations requiring further investigation.
- **Confirmed workarounds:** Alternatives demonstrated to work under documented conditions.
- **Unverified workarounds:** Suggestions or attempted solutions without sufficient confirmation.

An investigation does not need a successful resolution to be useful.

## Reproducibility and Evidence

Whenever possible, include relevant logs, error messages, configuration details, and test procedures.

Describe unsuccessful tests as carefully as successful ones.

Avoid presenting assumptions, speculation, or isolated observations as universally applicable conclusions.

Results obtained on one Linux distribution or hardware configuration should not automatically be treated as valid for all systems.

## Submitting Contributions

Use the Linux Mod Lab GitHub repository to propose changes or discuss technical findings.

For documentation or website changes:

1. Fork the repository.
2. Create a descriptive Git branch.
3. Make focused changes.
4. Test applicable changes locally.
5. Submit a pull request describing the changes and verification performed.

For website changes, run `npm run build` before submitting a pull request.

Please avoid including passwords, authentication tokens, personal information, or copyrighted game assets in logs and submissions.

## Collaboration

Linux Mod Lab welcomes constructive criticism, alternative approaches, and independent verification.

Technical disagreements should focus on evidence and reproducibility.

Our goal is not simply to demonstrate that something works, but to understand the conditions under which it works, fails, or remains uncertain.

## Project Scope

Linux Mod Lab began with investigations involving Grand Theft Auto V Legacy, RAGE Plugin Hook, and LSPDFR under Linux compatibility layers.

However, the initiative is not limited to those applications.

Future work may include additional games, modding frameworks, compatibility tools, and original open-source software.