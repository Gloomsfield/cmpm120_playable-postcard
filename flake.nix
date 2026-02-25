{
	description = "cmpm120_playable-postcard development environment";

	inputs = {
		nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
	};

	outputs = { self, nixpkgs }:
		let
			system = "aarch64-linux";
			pkgs = import nixpkgs { inherit system; };
		in {
			devShells.aarch64-linux.default = pkgs.mkShell {
				name = "cmpm120_playable-postcard";

				buildInputs = with pkgs; [
					live-server
					typescript-language-server
				];

				shellHook = ''
				'';
			};
		};
}
