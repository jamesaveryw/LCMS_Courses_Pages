using Microsoft.EntityFrameworkCore.Migrations;

namespace LCMS.Data.Migrations
{
    public partial class KeywordPageKeywordTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Keywords",
                columns: table => new
                {
                    Kw_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Kw_Word = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Keywords", x => x.Kw_Id);
                });

            migrationBuilder.CreateTable(
                name: "PagesKeywords",
                columns: table => new
                {
                    Pg_Id = table.Column<int>(type: "int", nullable: false),
                    Kw_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PagesKeywords", x => new { x.Pg_Id, x.Kw_Id });
                    table.ForeignKey(
                        name: "FK_PagesKeywords_Keywords_Kw_Id",
                        column: x => x.Kw_Id,
                        principalTable: "Keywords",
                        principalColumn: "Kw_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PagesKeywords_Pages_Pg_Id",
                        column: x => x.Pg_Id,
                        principalTable: "Pages",
                        principalColumn: "Pg_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PagesKeywords_Kw_Id",
                table: "PagesKeywords",
                column: "Kw_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PagesKeywords");

            migrationBuilder.DropTable(
                name: "Keywords");
        }
    }
}
