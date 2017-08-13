unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies installed, please try the command again."
  exit
end

Vagrant.configure('2') do |config|
  config.vm.box = 'ubuntu/trusty64'

  config.vm.network(:forwarded_port, guest: 8080, host: 8080)

  config.vm.provision :docker do |d|
    d.build_image "/vagrant/app"
  end
  config.vm.provision :docker_compose, yml: ['/vagrant/docker-compose.yml', '/vagrant/development.yml'], run: 'always', rebuild: true, project_name: "myproject"
end
