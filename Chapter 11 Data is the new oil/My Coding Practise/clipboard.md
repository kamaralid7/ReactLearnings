            <Section title = {"Team Instamart"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            isVisible = {sectionConfig.showAbout}
            setIsVisible = {
                    setSectionConfig({
                        showAbout: false,
                        showTeams: true,
                        showCareer: false
                    })
                
            }
            />             

            <Section title = {"Career"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            isVisible = {sectionConfig.showAbout}
            setIsVisible = {
                    setSectionConfig({
                        showAbout: false,
                        showTeams: false,
                        showCareer: true
                    })
                
            }
            />     