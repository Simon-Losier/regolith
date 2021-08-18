package main

import (
	"os"

	color2 "github.com/fatih/color"

	"bedrock-oss.github.com/regolith/src"
	"github.com/urfave/cli/v2"
)

var (
	commit      string
	version     = "unversioned"
	date        string
	buildSource = "DEV"
)

func main() {
	//goland:noinspection GoBoolExpressions
	src.InitLogging(buildSource == "DEV")
	src.CustomHelp()
	src.RegisterFilters()
	err := (&cli.App{
		Name:                 "Regolith",
		Usage:                "A bedrock addon compiler pipeline",
		EnableBashCompletion: true,
		Version:              version,
		Metadata: map[string]interface{}{
			"Commit":      commit,
			"Date":        date,
			"BuildSource": buildSource,
		},
		Writer:    color2.Output,
		ErrWriter: color2.Error,
		Commands: []*cli.Command{
			{
				Name:  "test",
				Usage: "Useful for quickly testing function execution",
				Action: func(c *cli.Context) error {
					src.DownloadFileTest()
					return nil
				},
			},
			{
				Name:  "run",
				Usage: "Runs Regolith, and generates cooked RP and BP, which will be exported per the config.",
				Action: func(c *cli.Context) error {
					args := c.Args().Slice()
					var profile string

					if len(args) == 0 {
						profile = "dev"
					} else {
						profile = args[0]
					}

					src.RunProfile(profile)
					return nil
				},
			},
			{
				Name:  "install",
				Usage: "Installs dependencies into the .regolith folder.",
				Action: func(c *cli.Context) error {
					src.InstallDependencies()
					return nil
				},
			},
			{
				Name:  "init",
				Usage: "Initialize a Regolith project in the current directory.",
				Action: func(c *cli.Context) error {
					src.InitializeRegolithProject(src.StringArrayContains(c.FlagNames(), "force"))
					return nil
				},
				Flags: []cli.Flag{
					&cli.BoolFlag{
						Name:    "force",
						Aliases: []string{"f"},
						Usage:   "Force the operateion, overriding potential safeguards.",
					},
				},
			},
		},
	}).Run(os.Args)
	if err != nil {
		panic(err)
	}
}
